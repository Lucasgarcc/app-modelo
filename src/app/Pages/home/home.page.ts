import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,
  IonTitle, IonToolbar,  IonSpinner } from '@ionic/angular/standalone';

import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, 
    IonToolbar, CommonModule, 
    FormsModule, IonSpinner]
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.navigateToLogin();
    }, 6000); // Aguardar 10 segundos antes de redirecionar
  }

   //Metodo de rotas para login
  navigateToLogin() {
    
    this.router.navigate(['/login']); // Usar Angular Router para navegação
  }
}