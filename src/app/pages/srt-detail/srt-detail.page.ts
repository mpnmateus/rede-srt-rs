import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/angular/standalone';
import { SrtService } from '../../services/srt';
import { Srt } from '../../models/srt.model';

@Component({
  selector: 'app-srt-detail',
  templateUrl: './srt-detail.page.html',
  styleUrls: ['./srt-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
})
export class SrtDetailPage {
  private route = inject(ActivatedRoute);
  private srtService = inject(SrtService);
  private location = inject(Location);

  srt?: Srt;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.srt = this.srtService.getSrtById(id);
  }

  voltar(): void {
    this.location.back();
  }
}