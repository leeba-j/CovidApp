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
  ) {
    this.getCountryData();

  }

  countryData : any;

  ngOnInit() {
  
    
  }

  async close() {
    this.serverService.clearLocalStorage();
    this.router.navigate(['/home']);
  }

  async getCountryData(){
    //  this.countryData = await this.storage.get('country');
    //  console.log(this.countryData);
    //  console.log("Lol",this.countryData);
console.log("In getcountrydata")
setTimeout(async ()=>{
  this.serverService.getLocalStorageData();

 this.countryData = await this.serverService.count;
 console.log(this.countryData)
},2000)

  }
}
