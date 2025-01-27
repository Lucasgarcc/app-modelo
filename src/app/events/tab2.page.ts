import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
  IonHeader, IonToolbar, 
  IonTitle, IonContent,
  IonSearchbar, IonCard, 
  IonCardContent,IonCardHeader, 
  IonCardSubtitle, IonCardTitle
]
})
export class Tab2Page {

  constructor() {}

}
