import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../listings/listings.component';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from '../../interfaces/housinglocation';

@Component({
  selector: 'home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by zipcode" #filter>
        <button class="primary" type="button" >Search</button>
      </form>
    </section>
    <section class="results">
      <listings 
        *ngFor="let housingLocation of this.housingLocations"
        [housingLocation]="housingLocation"
      ></listings>
    </section>
  `,
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  housingLocations: HousingLocation[] = [];

  constructor (private housingService: HousingService) {}

  ngOnInit(): void {
    this.housingService.getAllHousingLocations().subscribe((data) => {
      this.housingLocations = data;
    })
  }
}