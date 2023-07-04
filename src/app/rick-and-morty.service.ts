import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';
import { from,defer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  

  // The base URL of the API
  private baseUrl = 'https://rickandmortyapi.com/api/';

  constructor() { }

  // A method to get a list of characters from the API
  getCharacters(): Observable<any> {
    // Use axios to make a GET request to the API
    return from(axios.get(this.baseUrl + 'character')
      .then(response => {
        // Return the data as an observable
        return response.data;
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      }));
  }

  // A method to get a single character by id from the API
  getCharacter(id: number): Observable<any> {
    // Use axios to make a GET request to the API
    return defer(()=> axios.get(this.baseUrl + 'character/' + id)
      .then(response => {
        // Return the data as an observable
        return response.data;
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      }));
  }

  // A method to get a list of episodes from the API
  getEpisodes(): Observable<any> {
    // Use axios to make a GET request to the API
    return from(axios.get(this.baseUrl + 'episode')
      .then(response => {
        // Return the data as an observable
        return response.data;
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      }));
  }

  // A method to get a single episode by id from the API
  getEpisode(id: number): Observable<any> {
    // Use axios to make a GET request to the API
    return defer(()=>axios.get(this.baseUrl + 'episode/' + id)
      .then(response => {
        // Return the data as an observable
        return response.data;
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      }));
  }
}
