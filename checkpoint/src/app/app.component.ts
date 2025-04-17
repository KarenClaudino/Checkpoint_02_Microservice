import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Questao1Component } from "../questao1/questao1.component";
import { Questao2Component } from "../questao2/questao2.component";
import { Questao3Component } from "../questao3/questao3.component";
import { Questao4Component } from "../questao4/questao4.component";
import { Questao5Component } from "../questao5/questao5.component";
import { Questao6Component } from "../questao6/questao6.component";
import { Questao7Component } from "../questao7/questao7.component";
import { Questao8Component } from "../questao8/questao8.component";
import { Questao9Component } from "../questao9/questao9.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule, Questao2Component, Questao3Component, Questao1Component, Questao4Component, Questao5Component, Questao6Component, Questao7Component, Questao8Component, Questao9Component]
})
export class AppComponent {
  title = 'checkpoint';
}



