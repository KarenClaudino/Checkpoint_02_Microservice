import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questao8',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './questao8.component.html',
  styleUrl: './questao8.component.css'
})
export class Questao8Component {
  email: string = ''
  senha: number | undefined

  validarCampos(): boolean{
    return !this.email?.includes('@') || this.senha!.toString().length < 6 ? true : false;
  }
}