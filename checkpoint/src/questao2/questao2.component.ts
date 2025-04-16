import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-questao2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questao2.component.html',
  styleUrl: './questao2.component.css'
})
export class Questao2Component {
  itens=["Maça", "Banana", "Leite"];
}
