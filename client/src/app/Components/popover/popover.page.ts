import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/Services/server.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private serverService: ServerService, private router: Router) { }
  countries = new Array();
  data: any;
  ngOnInit() {
    this.getAllCountries();
  }

getAllCountries(){
  this.serverService.getAllCountries().subscribe(data => {
    this.data = data
     for (let i = 0; i < this.data.length; i++) {
      this.countries.push( this.data[i].Country);
    }
    ;
    this.countries = this.countries.sort();
    })

   
}

navigate(country){
this.router.navigate([`cases/${country}`])
  this.serverService.getOneCountryStats(country);
}

}
