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
   num = 0;
   constructor(private ParamsRouter: ActivatedRoute, private pokemonServicio: PokemonesService) {
  
   }
  
   ngOnInit() {
     this.ParamsRouter.params.subscribe(params => {
       this.pokemonById = this.pokemonServicio.getPokemonById(params['id']);
       this.num = params['id'];
       console.log(this.pokemonById);
     });
   }
  
  }
  