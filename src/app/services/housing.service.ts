import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HousingLocation } from '../interfaces/housinglocation';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  private apiURL = 'https://eu4pkvlfn8.execute-api.us-east-2.amazonaws.com/default/'
  constructor(private http: HttpClient) {  }

  getAllHousingLocations(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(this.apiURL + 'listings');
  }

  getHousingLocationById(id: number): Observable<HousingLocation | undefined> {
    return this.http.get<HousingLocation>(this.apiURL + `listings/${id}`)
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Application submitted for ${firstName} ${lastName} at ${email}`);
  }
}
