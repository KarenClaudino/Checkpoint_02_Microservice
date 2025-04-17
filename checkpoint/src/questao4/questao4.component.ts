import { Component } from '@angular/core';

@Component({
  selector: 'app-questao4',
  standalone: true,
  imports: [],
  templateUrl: './questao4.component.html',
  styleUrl: './questao4.component.css'
})
export class Questao4Component {
  tarefas=["Estudar angular", "Fazer exercícios", "Revisar código"];

  removerTarefas(tarefa:string) {
    this.tarefas = this.tarefas.filter(t => t !== tarefa)
  }
}
