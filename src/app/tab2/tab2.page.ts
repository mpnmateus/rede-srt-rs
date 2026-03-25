import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    RouterLink
  ],
})
export class Tab2Page {
  salvando = false;
  salvoComSucesso = false;

  salvarSrt(): void {
    this.salvando = true;
    this.salvoComSucesso = false;

    setTimeout(() => {
      this.salvando = false;
      this.salvoComSucesso = true;

      setTimeout(() => {
        this.salvoComSucesso = false;
      }, 2500);
    }, 900);
  }
}