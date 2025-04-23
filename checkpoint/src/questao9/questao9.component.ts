import { Component } from '@angular/core';

interface Produto{
  nome: string;
  preco: number;
  promocao: boolean;
}

@Component({
  selector: 'app-questao9',
  standalone: true,
  imports: [],
  templateUrl: './questao9.component.html',
  styleUrl: './questao9.component.css'
})
export class Questao9Component {
  produtos: Produto[] = [
    {
      nome: 'Notebook',
      preco: 3000,
      promocao: true,
    },
    {
      nome: 'Mouse',
      preco: 50,
      promocao: false
    }
  ]
}

