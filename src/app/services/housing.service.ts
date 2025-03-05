import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housinglocation';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  private apiURL = 'https://eu4pkvlfn8.execute-api.us-east-2.amazonaws.com/default/'
  constructor() {  }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    let result = [] as HousingLocation[];
    const res = await fetch(this.apiURL + 'listings');
    if (res.status === 200) result = await res.json();
    return result;
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    let result = undefined;
    const res = await fetch(this.apiURL + `listings/${id}`)
    if (res.status == 200) result = await res.json();
    return result;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Application submitted for ${firstName} ${lastName} at ${email}`);
  }
}
