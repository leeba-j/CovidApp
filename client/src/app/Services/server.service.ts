import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import {environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ServerService  implements OnInit{
  Countries = environment.COUNTRIES_API;
  Covid = environment.COVID_API;
  countryData: any;
  count : any;
  constructor(private httpClient: HttpClient, private storage: Storage) { }

  async ngOnInit(){
    await this.storage.create();
  }
  getAllCountries(){
    return this.httpClient.get(`${this.Countries}/countries`)
  }

  getGlobalSummary(){
    return this.httpClient.get(`${this.Countries}/summary`)
  }
  getOneCountryStats(country:string){
    return this.httpClient.get(`${this.Covid}/cases?country=${country}`).subscribe(async data => {this.ngOnInit();this.countryData = data; await this.storage.set('country', this.countryData);})

  }

  async clearLocalStorage(){
    await this.storage.clear();
  }

  async getLocalStorageData(){
    this.count =
    await this.storage.get('country');
    console.log(this.count)
  }
}
