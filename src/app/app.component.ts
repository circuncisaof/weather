import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TQuery } from 'src/Types/search.types';
import { ILocation } from 'src/_interfaces/ILocation';
import { WeatherApiService } from 'src/services/weather.api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  locals: ILocation = {} as ILocation;

  @Input() text:string = "Search";
  Aqi: "yes" | "no" = "yes";

  @Input() query:string = "";
  @Input() sub:string = "";
  details:string = ""


  formGroup!: FormGroup;
  constructor (private http: WeatherApiService) {}
  ngOnInit() {
    this.formGroup = new FormGroup({
      nameCity: new FormControl('',[Validators.required])
    })
  }

  get InputText() {
    return this.formGroup.get('nameCity')!
  }

  fetchWeatherData() {
    if(this.formGroup.invalid) return;

    try {
      const payload: TQuery = {
        nameCity: String(this.formGroup.controls['nameCity'].value),
      }

      this.http.FilterWeather(payload, this.Aqi).subscribe({ next:(data) => { console.log(data),this.locals = data}  })
    } catch (error) {
      console.log(error)
    } finally {
      this.formGroup.reset()
    }
  }

}
