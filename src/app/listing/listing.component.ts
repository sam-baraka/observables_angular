import { Component } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

    // A variable to store the list of items
    characters: any[] = [];

    constructor(private rickAndMortyService: RickAndMortyService) { }
  
    ngOnInit() {
      // Call the service method to get the data from the API
      this.rickAndMortyService.getCharacters().subscribe(
        data => {
          // handle the data
          this.characters = data.results;
        },
        error => {
          // handle the error
          console.error(error);
        }
      );
    }
  
  }


