import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ServerService } from 'src/app/Services/server.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.page.html',
  styleUrls: ['./cases.page.scss'],
})
export class CasesPage implements OnInit {
  constructor(
    private serverService: ServerService,
    private storage: Storage,
    private router: Router
  ) {}

  countryData: any;
  localStorage: number;
  countryName: string;
  recovered: string;
  confirmed:string;
  deaths: string;

  ngOnInit() {
    this.storage.create();
    this.storage.set('country', this.serverService.countryName);
    this.getCountryData();
  }
  close() {
    this.router.navigate(['/home']);
    this.storage.clear();
  }

  async getCountryData() {
    this.serverService
      .getOneCountryStats(this.serverService.countryName)
      .subscribe((data) => {
        this.countryData = data['All'];
        this.countryName = this.countryData['country'];
        this.recovered = this.countryData['recovered'];
        this.confirmed = this.countryData['confirmed'];
        this.deaths = this.countryData['deaths'];
      });
  }
}
