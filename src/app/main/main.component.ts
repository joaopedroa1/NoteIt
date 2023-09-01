import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  listaNotas = [{
    titulo:"BBBBBBB",
    conteudo:"AAAAAAAA",
    tipo:"tipo1"
  },{
    titulo:"CCCCC",
    conteudo:"AAAADS",
    tipo:"tipo2"
  }];
}
