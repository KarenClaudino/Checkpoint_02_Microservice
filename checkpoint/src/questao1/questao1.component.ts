import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questao1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './questao1.component.html',
  styleUrl: './questao1.component.css'
})
export class Questao1Component {
  mes = 1;
}
