import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Pokemon } from '../class/pokemon';

@Injectable()
export class PokemonesService {
  pokemon: Pokemon[] = [];
  private _changePokemon = new BehaviorSubject<Pokemon[]>(this.pokemon);
  
  pokemonChange$ = this._changePokemon.asObservable();

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  constructor(private http: Http) { }

  getPokemons(offset: number, limit: number) {
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)

      .toPromise()
      .then(response => response.json().results)
      .then(items => {
        items.map((item, idx) => {
          let poke : Pokemon = {
            id : idx + offset + 1,
            name : item.name,
            sprite : this.baseSpriteUrl + (idx + offset + 1) + '.png',
            imageLoaded: false
          }
          this.pokemon.push(poke);
          });
          this._changePokemon.next(this.pokemon);
      });
  }

  getPokemonById(id: number): Observable<any> {
    const url = `${this.baseUrl}${id}`;
    return this.http.get(url);
  }
}
