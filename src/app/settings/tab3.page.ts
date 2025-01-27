import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonInput, IonItem, IonButton, IonModal, IonButtons, IonLabel, IonInputPasswordToggle } from '@ionic/angular/standalone';


import { users } from 'src/app/services/users.model';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle,
    IonContent, IonButton, IonModal,
    IonInput, IonList, IonButtons, IonLabel,
    FormsModule, IonInputPasswordToggle
  ],
})
export class Tab3Page {
  users$ = new Observable<users[]>();
  
  id = '' ;
  name = ' ' ;
  email = ' ';
  password = '';

  

  constructor( private router: Router,
      private UserService: UserService) {}
  isModalOpen = false;

  /* Abre modal */

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  /* Utiliza o método de Get do UserService */

  getUsersRegisters() {
    this.users$ = this.UserService.getUser()
  }

  /* Utiliza o método de put do UserService */

  updateData() {
    this.UserService.updateUser({ 
      name: this.name,
      email: this.email,
      password: this.password

    }).subscribe(() => this.getUsersRegisters());
  }

}
