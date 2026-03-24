import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/angular/standalone';
import { Srt } from '../models/srt.model';
import { SrtService } from '../services/srt';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab1Page {
  private srtService = inject(SrtService);

  srts: Srt[] = [];

  constructor() {
    this.srts = this.srtService.getSrts();
    console.log('SRTs carregadas:', this.srts);
  }
}