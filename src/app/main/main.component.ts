import { Component } from '@angular/core';
import { Nota } from '../componentes/nota';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  listaNotas: Nota[] = [{
    titulo:"BBBBBBB",
    conteudo:"AAAAAAAA",
    tipo:"tipo1"
  },{
    titulo:"CCCCC",
    conteudo:"AAAADS",
    tipo:"tipo2"
  }];
}
