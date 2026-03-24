export interface Srt {
  id: number;
  nome: string;
  cidade: string;
  telefone: string;
  endereco: string;
  gestao: string;
  esfera: 'publico' | 'privado';
  capacidade: number;
  vagasDisponiveis: number;
  genero: 'masculino' | 'feminino' | 'misto';
  tipo: 'tipo1' | 'tipo2';
}