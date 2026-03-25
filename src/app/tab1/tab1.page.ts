import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RouterLink
  ],
})
export class Tab1Page {
  private srtService = inject(SrtService);
  private router = inject(Router);

  srts: Srt[] = [];
  srtsFiltradas: Srt[] = [];

  busca = '';
  filtroCidade = '';
  filtroTipo = '';
  filtroGenero = '';

  painelFiltrosAberto = false;

  constructor() {
    this.srts = this.srtService.getSrts();
    this.srtsFiltradas = [...this.srts];
  }

  get cidadesDisponiveis(): string[] {
    return [...new Set(this.srts.map((srt) => srt.cidade))].sort((a, b) =>
      a.localeCompare(b)
    );
  }

  get filtrosAtivosCount(): number {
    let count = 0;

    if (this.filtroCidade) count++;
    if (this.filtroTipo) count++;
    if (this.filtroGenero) count++;

    return count;
  }

  toggleFiltros(): void {
    this.painelFiltrosAberto = !this.painelFiltrosAberto;
  }

  fecharFiltros(): void {
    this.painelFiltrosAberto = false;
  }

  aplicarFiltros(): void {
    const termo = this.busca.trim().toLowerCase();

    this.srtsFiltradas = this.srts.filter((srt) => {
      const matchBusca =
        !termo ||
        srt.nome.toLowerCase().includes(termo) ||
        srt.cidade.toLowerCase().includes(termo);

      const matchCidade =
        !this.filtroCidade || srt.cidade === this.filtroCidade;

      const matchTipo =
        !this.filtroTipo ||
        srt.tipo.toLowerCase() === this.filtroTipo.toLowerCase();

      const matchGenero =
        !this.filtroGenero ||
        srt.genero.toLowerCase() === this.filtroGenero.toLowerCase();

      return matchBusca && matchCidade && matchTipo && matchGenero;
    });
  }

  limparFiltros(): void {
    this.busca = '';
    this.filtroCidade = '';
    this.filtroTipo = '';
    this.filtroGenero = '';
    this.srtsFiltradas = [...this.srts];
  }

  openDetail(id: number): void {
    this.router.navigate(['/srt', id]);
  }

  openNovo(): void {
    this.router.navigate(['/novo']);
  }
}