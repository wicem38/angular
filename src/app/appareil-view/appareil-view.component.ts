import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appreil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  lastUpdate = new Date();
 appareils: any[];
  constructor(private appareilSerivice: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
 ngOnInit(){
   this.appareils = this.appareilSerivice.appareils;
 }
 onAllumer(){
   this.appareilSerivice.switchOnAll();
 }
 onEteindre() {
  if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
    this.appareilSerivice.switchOffAll();
  } else {
    return null;
  }
}
}
