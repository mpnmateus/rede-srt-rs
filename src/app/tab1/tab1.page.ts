import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab1Page {
  private srtService = inject(SrtService);
  private router = inject(Router);

  srts: Srt[] = [];

  constructor() {
    this.srts = this.srtService.getSrts();
    console.log('SRTs carregadas:', this.srts);
  }

  openDetail(id: number): void {
    console.log('Clique capturado no card. ID:', id);
    this.router.navigate(['/srt', id]);
  }

  openNewSrt(): void {
    console.log('Clique capturado no FAB');
    this.router.navigate(['/tabs/tab2']);
  }

  testClick(origem: string): void {
    console.log('Clique de teste funcionando em:', origem);
  }
}