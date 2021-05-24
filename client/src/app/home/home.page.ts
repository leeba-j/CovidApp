import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Global } from '../models/global';
import { ServerService } from '../Services/server.service';
import { PopoverPage} from '../Components/popover/popover.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  GlobalSummary: Global;
  constructor(private serverService: ServerService, private popoverController: PopoverController) {}
  ngOnInit(){
    this.globalSummary();
  }
  globalSummary(){
    this.serverService.getGlobalSummary().subscribe(data => {
      this.GlobalSummary = data['Global'];
    })
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
 
  }

}
