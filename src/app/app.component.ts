import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TQuery } from 'src/Types/search.types';
import { ILocation } from 'src/_interfaces/ILocation';
import { WeatherApiService } from 'src/services/weather.api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {


  weather:string = 'Weather your app!';
  footer_weather:string = 'Desenvolvido por Fabio Eduardo Circuncisao'
  locals: ILocation = {} as ILocation;

  @Input() text:string = "Search";
  Aqi: "yes" | "no" = "yes";

  @Input() query:string = "";
  @Input() sub:string = "";
  details:string = "";
  error:Error | string = '*Não pode ser nulo!!';
  error_serve:string='';
  has_errors:boolean = false;
  formGroup!: FormGroup;
  constructor (private http: WeatherApiService) {}
  ngOnInit() {
    this.formGroup = new FormGroup({
      nameCity: new FormControl("",[Validators.required])
    })
  }
  ngOnDestroy(): void {
    this.fetchWeatherData()
  }

  get NameCity(){
    return this.formGroup.get('nameCity')!
  }

  fetchWeatherData():void {
    if(this.formGroup.invalid) return;
    if(!this.formGroup.controls['nameCity'].value.trim().length){
      this.formGroup.controls['nameCity'].reset()

    };

      const payload: TQuery = {
        nameCity: String(this.formGroup.controls['nameCity'].value),
      }
     this.formGroup.reset()
      this.http.FilterWeather(payload, this.Aqi)
        .subscribe({next:(data) =>{
          this.has_errors= false;
          this.locals = data;
          }, error: (err) => {
            this.has_errors = true;
            this.error_serve = 'Não encontrado!';
            return err
          }})
  }

}
