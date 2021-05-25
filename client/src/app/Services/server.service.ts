import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  Countries = environment.COUNTRIES_API;
  Covid = environment.COVID_API;
  countryData: any;
  countryName: any;
  constructor(private httpClient: HttpClient) {}

  getAllCountries() {
    return this.httpClient.get(`${this.Countries}/countries`);
  }

  getGlobalSummary() {
    return this.httpClient.get(`${this.Countries}/summary`);
  }
  getOneCountryStats(country: string) {
    this.countryName = country;

    return this.httpClient.get(
      `${this.Covid}/cases?country=${this.countryName}`
    );
  }
}
