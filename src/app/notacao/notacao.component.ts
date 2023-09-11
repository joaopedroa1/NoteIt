import { Component, Input } from '@angular/core';
import { Nota } from '../componentes/nota';

@Component({
  selector: 'app-notacao',
  templateUrl: './notacao.component.html',
  styleUrls: ['./notacao.component.css']
})
export class NotacaoComponent {
  @Input() nota: Nota ={
    id: 0,
    titulo: "AAA",
    conteudo: "Teste",
    tipo:"tipo2",
  }
}

