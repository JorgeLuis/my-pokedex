import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PokemonesService {

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  constructor(private http: Http) { }

  getPokemons(offset: number, limit: number) {
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)

      .toPromise()
      .then(response => response.json().results)
      .then(items => items.map((item, idx) => {

        const id: number = idx + offset + 1;

        return {
          name: item.name,
          sprite: `${this.baseSpriteUrl}${id}.png`,
          id
        };
      }));
  }

  getPokemonById(id: number) {

    const url = `${this.baseUrl}${id}`;
    this.http.get(url)
      .toPromise()
      .then(response => {
        return {
          id: id,
          name: response.json().name,
          sprite: `${this.baseSpriteUrl}${id}.png`,

        };
      });
  }
}
