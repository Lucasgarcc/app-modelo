import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonIcon, IonInput, IonInputPasswordToggle, IonButtons, IonModal, IonList } from '@ionic/angular/standalone';

import { Router} from '@angular/router'; // Importa as rotas

import { addIcons } from 'ionicons'; // Adicona o Icone
import { logoIonic, logoBuffer } from 'ionicons/icons';
import { users } from 'src/app/services/users.model';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonModal, IonButtons, IonInput, IonContent,
    IonHeader, IonTitle,
    IonToolbar, CommonModule, FormsModule,
    IonButton, IonLabel, IonIcon,
    IonInputPasswordToggle,
    FormsModule,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonList,
    IonModal,
    IonTitle,
    IonToolbar
  ]
})
export class LoginPage implements OnInit {
 //  users: users[] = []
 
 /* TypeScript Variaveis */

  users$ = new Observable<users[]>();

  isModalOpen: boolean = false; // Controle do estado do modal

  // Form Cadastro 
  id = '';
  name = '';
  email = '';
  password = '';


  constructor(private router: Router,
    private UserService: UserService
  ) {
    addIcons({ logoBuffer });
  }

  ngOnInit() {
    addIcons({ logoIonic });
  }



  /* Entra Logar na conta */

  login() {
    this.router.navigate(['/tabs/tab1']);
  }


  /* Registrar usuario */

   registerUsers () {
    
    const isValid = this.name && this.email && this.password

    if(!isValid) {
      return alert('Preencha todos os dados') ;
    }

    this.UserService.postUsers(
      {
        name: this.name,
        email: this.email,
        password: this.password
      }
    ).subscribe(() => this.getUsersRegisters())
   }

   
  /* Utiliza o método de Get do UserService */

  getUsersRegisters() {
    this.users$ = this.UserService.getUser()
  }

  /* ---- Modal ----- */

  openRegisterModal() {
    this.isModalOpen = true; // Abre o modal
  }

  cancel() {
    this.isModalOpen = false; // Fecha o modal ao cancelar
  }

  confirm() {
    this.isModalOpen = false; // Fecha o modal ao confirmar
    console.log('Nome cadastrado:', this.name);
  }





}