import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
  selector: 'app-srt-edit',
  templateUrl: './srt-edit.page.html',
  styleUrls: ['./srt-edit.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    RouterLink
  ],
})
export class SrtEditPage {
  private route = inject(ActivatedRoute);
  private srtService = inject(SrtService);

  srt?: Srt;

  form = {
    id: 0,
    nome: '',
    cidade: '',
    telefone: '',
    endereco: '',
    gestao: '',
    esfera: 'publica',
    genero: 'misto',
    tipo: 'tipo1',
    capacidade: 0,
    vagasDisponiveis: 0,
  };

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const srt = this.srtService.getSrtById(id);

    if (srt) {
      this.srt = srt;
      this.form = {
        id: srt.id,
        nome: srt.nome,
        cidade: srt.cidade,
        telefone: srt.telefone,
        endereco: srt.endereco,
        gestao: srt.gestao,
        esfera: this.normalizarEsfera(srt.esfera),
        genero: srt.genero,
        tipo: srt.tipo,
        capacidade: srt.capacidade,
        vagasDisponiveis: srt.vagasDisponiveis,
      };
    }
  }

  private normalizarEsfera(valor: string): string {
    const esfera = (valor || '').toLowerCase().trim();

    if (esfera === 'publica' || esfera === 'pública' || esfera === 'publico' || esfera === 'público') {
      return 'publica';
    }

    return 'privada';
  }

  get vagasOcupadas(): number {
    const ocupadas = this.form.capacidade - this.form.vagasDisponiveis;
    return ocupadas < 0 ? 0 : ocupadas;
  }

  get percentualOcupacao(): number {
    if (this.form.capacidade <= 0) return 0;
    return Math.round((this.vagasOcupadas / this.form.capacidade) * 100);
  }

  incrementarOcupadas(): void {
    if (this.vagasOcupadas < this.form.capacidade) {
      this.form.vagasDisponiveis--;
    }

    if (this.form.vagasDisponiveis < 0) {
      this.form.vagasDisponiveis = 0;
    }
  }

  decrementarOcupadas(): void {
    if (this.vagasOcupadas > 0) {
      this.form.vagasDisponiveis++;
    }

    if (this.form.vagasDisponiveis > this.form.capacidade) {
      this.form.vagasDisponiveis = this.form.capacidade;
    }
  }

  normalizarCapacidade(): void {
    if (this.form.capacidade < 0) {
      this.form.capacidade = 0;
    }

    if (this.form.vagasDisponiveis > this.form.capacidade) {
      this.form.vagasDisponiveis = this.form.capacidade;
    }
  }

  normalizarVagas(): void {
    if (this.form.vagasDisponiveis < 0) {
      this.form.vagasDisponiveis = 0;
    }

    if (this.form.vagasDisponiveis > this.form.capacidade) {
      this.form.vagasDisponiveis = this.form.capacidade;
    }
  }

  get tituloTipo(): string {
    return this.form.tipo === 'tipo2' ? 'Tipo 2' : 'Tipo 1';
  }

  get tituloGenero(): string {
    const genero = this.form.genero.toLowerCase();

    if (genero === 'masculino') return 'Público Masculino';
    if (genero === 'feminino') return 'Público Feminino';
    return 'Público Misto';
  }
}