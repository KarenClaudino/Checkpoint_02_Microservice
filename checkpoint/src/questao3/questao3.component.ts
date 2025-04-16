import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-questao3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questao3.component.html',
  styleUrl: './questao3.component.css'
})
export class Questao3Component {
  mostrar: boolean = false;
  idade: number = 18;
  constructor() { }
  
  aumentarIdade() {
    this.idade++;
  }

  diminuirIdade() {
    this.idade--;
  }
}
