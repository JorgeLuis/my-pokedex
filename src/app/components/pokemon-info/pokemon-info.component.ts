import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonesService } from '../../services/pokemones.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
  pokemon: any[] = [];
  pokemonById: any;
  pokemonImageById: any;
  num = 0;
  error;
  urlId = '';
  private urlImage = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

  constructor(private ParamsRouter: ActivatedRoute, private pokemonServicio: PokemonesService) {

    this.ParamsRouter.params.subscribe(params => {
      this.num = params['id'];
      console.log(this.num);

      const stringId = this.num.toString();
      if (stringId.length === 1) {
        this.urlId = '00' + stringId;
      } else if (stringId.length === 2) {
        this.urlId = '0' + stringId;
      } else if (stringId.length === 3) {
        this.urlId = stringId;
      }


      this.urlImage += this.urlId + '.png';
    });
  }

  ngOnInit() {
    this.ParamsRouter.params.subscribe(params => {
      this.pokemonServicio.getPokemonById(params['id']).subscribe(
        (resp) => {
          this.pokemonById = JSON.parse(resp._body);
        },
        (err) => {
          this.error = err;
        }
      );

    });
  }

}
