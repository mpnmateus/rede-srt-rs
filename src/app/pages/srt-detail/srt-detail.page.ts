import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';
import { SrtService } from '../../services/srt';
import { Srt } from '../../models/srt.model';

@Component({
  selector: 'app-srt-detail',
  templateUrl: './srt-detail.page.html',
  styleUrls: ['./srt-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton
  ],
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

  get percentualOcupacao(): number {
    if (!this.srt || this.srt.capacidade <= 0) return 0;

    const ocupadas = this.srt.capacidade - this.srt.vagasDisponiveis;
    return Math.round((ocupadas / this.srt.capacidade) * 100);
  }

  get vagasOcupadas(): number {
    if (!this.srt) return 0;
    return this.srt.capacidade - this.srt.vagasDisponiveis;
  }

  get generoLabel(): string {
    if (!this.srt) return '';

    const genero = this.srt.genero.toLowerCase();

    if (genero === 'masculino') return 'Público Masculino';
    if (genero === 'feminino') return 'Público Feminino';
    return 'Público Misto';
  }

  get esferaLabel(): string {
    if (!this.srt) return '';

    const esfera = this.srt.esfera.toLowerCase();
    return esfera === 'publica' || esfera === 'pública'
      ? 'Pública (SUS)'
      : 'Privada';
  }

  get tipoLabel(): string {
    if (!this.srt) return '';
    return this.srt.tipo.replace('tipo', 'SRT Tipo ').toUpperCase();
  }
}