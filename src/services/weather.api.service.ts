import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { TQuery } from "src/Types/search.types";
import { TAqi } from "src/Types/aqi.types";
import { Observable, catchError, retry, throwError } from "rxjs";
import { ILocation } from "src/_interfaces/ILocation";
@Injectable({
  providedIn:'root'
})

export class WeatherApiService {
  readonly service_api_url = 'http://api.weatherapi.com/v1';
  readonly current = 'current.json';
  readonly key = 'e7a92bcadb114c96a85114954241804'
  constructor(private http: HttpClient){}

  FilterWeather(query: TQuery, aqi: TAqi):Observable<ILocation>{
    console.log(query.nameCity);

   const data =this.http.get<ILocation>(`${this.service_api_url}/${this.current}?key=${this.key}
    &q=${query.nameCity}&aqi=${aqi}`)
    .pipe(
      retry(2),
      catchError(this.handleError)

    );
    return data
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
