import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent {
  @Input() next= 'Proximo';



  clientConsole(){
    console.log('click click...');

  }
}
