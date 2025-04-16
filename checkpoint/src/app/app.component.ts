import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Questao1Component } from "../questao1/questao1.component";
import { Questao2Component } from "../questao2/questao2.component";
import { Questao3Component } from "../questao3/questao3.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule, Questao2Component, Questao3Component, Questao1Component]
})
export class AppComponent {
  title = 'checkpoint';
}



