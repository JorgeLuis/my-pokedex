import { Component, OnInit } from '@angular/core';
import { PokemonesService } from '../../services/pokemones.service';
import { Pokemon } from '../../class/pokemon';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {
  pokemon: Pokemon[] = [];
  isLoading = false;
  error = false;
  constructor(private pokedexService: PokemonesService) { }

  ngOnInit() {
    this.pokedexService.pokemonChange$.subscribe(
      (pokemons: Pokemon[]) => {
        this.pokemon = pokemons;
        this.isLoading = false;
        this.error = false;
      },
      (err) => {
        this.error = true;
        this.isLoading = false;
      }
    );
    /* this.loadMore(); */
  }

  loadMore() {
    this.isLoading = true;

    /* this.pokedexService.getPokemonById(5) */
    this.pokedexService.getPokemons(this.pokemon.length, 9);
  }
}
