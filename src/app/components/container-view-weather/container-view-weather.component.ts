import { Component, Input } from '@angular/core';
import { ILocation } from 'src/_interfaces/ILocation';

type Varrr = {
  newKey: string
  [key: string]: string
}


type Sarrr = {
  proc: number
};

type Generic = {
  key1:Varrr
  key2: Sarrr
}

@Component({
  selector: 'app-container-view-weather',
  templateUrl: './container-view-weather.component.html',
  styleUrls: ['./container-view-weather.component.css']
})
export class ContainerViewWeatherComponent {
  @Input()
  props: ILocation = {} as ILocation;
  // test: Generic[] = [];

  gen: Varrr = {
    newKey: "46464654",
    banana: ''
  }
}
