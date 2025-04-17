import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questao5',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './questao5.component.html',
  styleUrl: './questao5.component.css'
})
export class Questao5Component {
    status: string = '';
}
