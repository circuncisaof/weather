import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError } from "rxjs";
import { TAqi } from "src/Types/aqi.types";
import { TQuery } from "src/Types/search.types";
import { ILocation } from "src/_interfaces/ILocation";
@Injectable({
  providedIn:'root'
})

export class WeatherApiService {
  readonly service_api_url = 'http://api.weatherapi.com/v1';
  readonly current = 'current.json';
  readonly key = 'e7a92bcadb114c96a85114954241804'
  constructor(private http: HttpClient){}

  FilterWeather(query: TQuery, aqi: TAqi) {
    return  this.http.get<ILocation>(`${this.service_api_url}/${this.current}?key=${this.key}
      &q=${query.nameCity}&aqi=${aqi}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
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
    return throwError(errorMessage,

    )

  };
}
