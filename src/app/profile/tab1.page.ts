import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonLabel, IonAvatar, IonList, IonButtons,
  IonMenu, IonMenuButton, IonIcon, IonDatetime } from '@ionic/angular/standalone';

import { users } from '../services/users.model';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  
  imports: [
    CommonModule, IonHeader,
    IonToolbar, IonTitle,
    IonContent,
    IonItem, IonLabel, IonAvatar, IonList,
    IonButtons, IonMenu, IonMenuButton,
    IonIcon, IonDatetime
],
})
export class Tab1Page {
[x: string]: any;
  // users: users[] = [] /* Tradicional 
  // forma de criar array refetencia API */
 
  users$ = new Observable<users[]>();  /* Conversão de API Observable */


  constructor(
    private UserService: UserService
  ) {

    this.getUsersRegisters();
  }


  /* Utiliza o método de Get do UserService */

  getUsersRegisters() {
    this.users$ = this.UserService.getUser()
  }
}
