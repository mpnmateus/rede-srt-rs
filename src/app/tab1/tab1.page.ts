import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
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
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
})
export class Tab1Page {
  private srtService = inject(SrtService);
  private router = inject(Router);

  srts: Srt[] = [];

  constructor() {
    this.srts = this.srtService.getSrts();
  }

  openDetail(id: number): void {
    this.router.navigate(['/srt', id]);
  }

  openNovo(): void {
    this.router.navigate(['/novo']);
  }
}