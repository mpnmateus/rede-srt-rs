import { Injectable } from '@angular/core';
import { Srt } from '../models/srt.model';

@Injectable({
  providedIn: 'root'
})
export class SrtService {
  private srts: Srt[] = [
    {
      id: 1,
      nome: 'SRT Girassol',
      cidade: 'Porto Alegre',
      telefone: '(51) 99999-1111',
      endereco: 'Rua das Flores, 100',
      gestao: 'Hospital Vila Nova',
      esfera: 'privado',
      capacidade: 10,
      vagasDisponiveis: 2,
      genero: 'misto',
      tipo: 'tipo1'
    },
    {
      id: 2,
      nome: 'SRT Esperança',
      cidade: 'Viamão',
      telefone: '(51) 99999-2222',
      endereco: 'Av. Central, 250',
      gestao: 'Prefeitura Municipal',
      esfera: 'publico',
      capacidade: 8,
      vagasDisponiveis: 0,
      genero: 'feminino',
      tipo: 'tipo2'
    },
    {
      id: 3,
      nome: 'SRT Caminhos',
      cidade: 'Pelotas',
      telefone: '(53) 99999-3333',
      endereco: 'Rua Nova, 45',
      gestao: 'Instituto Caminhar',
      esfera: 'privado',
      capacidade: 12,
      vagasDisponiveis: 5,
      genero: 'masculino',
      tipo: 'tipo1'
    }
  ];

  getSrts(): Srt[] {
    return this.srts;
  }

  getSrtById(id: number): Srt | undefined {
    return this.srts.find((srt) => srt.id === id);
  }
}