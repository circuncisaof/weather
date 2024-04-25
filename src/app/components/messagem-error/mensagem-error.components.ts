import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-mensagem-error',
  templateUrl:'./mensagem-error.components.html',
  styleUrls: ['./mensagem-error.components.css']
})

export class MensagemErrorComponent {
  @Input() error:string = '';
}
