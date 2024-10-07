import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonInput,
  IonCardContent,
  IonCardTitle,
  IonCardHeader,
  IonCard } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonButton, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonInput,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard]
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClickINGRESAR() {
    this.router.navigate(['/home']);
    //console.log('Hola...'); en inspeccionar en consola se visualiza

  }

}
