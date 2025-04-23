import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questao10',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './questao10.component.html',
  styleUrl: './questao10.component.css'
})
export class Questao10Component {
  valor1: number = 0;
  valor2: number = 0;
  operacao: string | undefined;
}
