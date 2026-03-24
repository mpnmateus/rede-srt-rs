import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SrtService } from '../../services/srt';
import { Srt } from '../../models/srt.model';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-srt-detail',
  templateUrl: './srt-detail.page.html',
  styleUrls: ['./srt-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class SrtDetailPage {
  private route = inject(ActivatedRoute);
  private srtService = inject(SrtService);

  srt?: Srt;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.srt = this.srtService.getSrtById(id);
  }
}