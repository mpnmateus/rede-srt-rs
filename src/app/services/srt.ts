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
      endereco: 'Rua das Flores, 100 - Centro Histórico, Porto Alegre',
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
      telefone: '(51) 3344-5566',
      endereco: 'Rua das Acácias, 452 - Centro, Viamão',
      gestao: 'Secretaria Municipal de Saúde',
      esfera: 'publico',
      capacidade: 10,
      vagasDisponiveis: 0,
      genero: 'feminino',
      tipo: 'tipo2'
    },
    {
      id: 3,
      nome: 'SRT Caminhos',
      cidade: 'Pelotas',
      telefone: '(53) 98888-1010',
      endereco: 'Rua General Neto, 845 - Centro, Pelotas',
      gestao: 'Rede de Atenção Psicossocial',
      esfera: 'publico',
      capacidade: 10,
      vagasDisponiveis: 5,
      genero: 'masculino',
      tipo: 'tipo1'
    },

    // 🔵 NOVOS EM PORTO ALEGRE (para demonstrar filtro)
    {
      id: 4,
      nome: 'SRT Bela Vista',
      cidade: 'Porto Alegre',
      telefone: '(51) 98888-2222',
      endereco: 'Rua Anita Garibaldi, 230 - Bela Vista, Porto Alegre',
      gestao: 'Clínica Bela Vista',
      esfera: 'privado',
      capacidade: 8,
      vagasDisponiveis: 1,
      genero: 'feminino',
      tipo: 'tipo2'
    },
    {
      id: 5,
      nome: 'SRT Harmonia',
      cidade: 'Porto Alegre',
      telefone: '(51) 97777-3333',
      endereco: 'Rua Lima e Silva, 780 - Cidade Baixa, Porto Alegre',
      gestao: 'Rede Municipal de Saúde',
      esfera: 'publico',
      capacidade: 12,
      vagasDisponiveis: 6,
      genero: 'masculino',
      tipo: 'tipo1'
    },

    // 🔹 OUTRAS CIDADES
    {
      id: 6,
      nome: 'SRT Horizonte',
      cidade: 'Caxias do Sul',
      telefone: '(54) 99111-2233',
      endereco: 'Rua Bento Gonçalves, 920 - Exposição, Caxias do Sul',
      gestao: 'Fundação Municipal de Saúde',
      esfera: 'publico',
      capacidade: 8,
      vagasDisponiveis: 3,
      genero: 'misto',
      tipo: 'tipo2'
    },
    {
      id: 7,
      nome: 'SRT Recomeço',
      cidade: 'Santa Maria',
      telefone: '(55) 99222-3344',
      endereco: 'Rua Venâncio Aires, 310 - Centro, Santa Maria',
      gestao: 'Hospital Casa de Saúde',
      esfera: 'privado',
      capacidade: 12,
      vagasDisponiveis: 4,
      genero: 'feminino',
      tipo: 'tipo1'
    },
    {
      id: 8,
      nome: 'SRT Bem Viver',
      cidade: 'Passo Fundo',
      telefone: '(54) 99333-4455',
      endereco: 'Rua Morom, 1200 - Centro, Passo Fundo',
      gestao: 'Coordenação de Saúde Mental',
      esfera: 'publico',
      capacidade: 9,
      vagasDisponiveis: 1,
      genero: 'masculino',
      tipo: 'tipo2'
    },
    {
      id: 9,
      nome: 'SRT Aurora',
      cidade: 'Gravataí',
      telefone: '(51) 99444-5566',
      endereco: 'Rua Anápio Gomes, 670 - Centro, Gravataí',
      gestao: 'Rede Municipal de Saúde',
      esfera: 'publico',
      capacidade: 10,
      vagasDisponiveis: 6,
      genero: 'misto',
      tipo: 'tipo1'
    },
    {
      id: 10,
      nome: 'SRT Travessia',
      cidade: 'Canoas',
      telefone: '(51) 99555-6677',
      endereco: 'Rua Domingos Martins, 540 - Centro, Canoas',
      gestao: 'Hospital Universitário',
      esfera: 'privado',
      capacidade: 8,
      vagasDisponiveis: 2,
      genero: 'feminino',
      tipo: 'tipo2'
    }
  ];

  getSrts(): Srt[] {
    return this.srts;
  }

  getSrtById(id: number): Srt | undefined {
    return this.srts.find((srt) => srt.id === id);
  }
}