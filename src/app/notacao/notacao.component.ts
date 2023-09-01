import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notacao',
  templateUrl: './notacao.component.html',
  styleUrls: ['./notacao.component.css']
})
export class NotacaoComponent {
  @Input() nota ={
    titulo: "AAA",
    conteudo: "Teste",
    tipo:"tipo2",
  }
}

