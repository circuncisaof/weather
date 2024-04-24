import { ILocation } from "./ILocation";

export interface IWind extends ILocation {
  wind_mph: any;
  wind_kph: any;
  wind_degree: any;
  wind_dir: string;
  pressure_mb: any;
  pressure_in: any;
  precip_mm: any;
  precip_in: any;
  humidity: any;
  cloud: number,
  feelslike_c: any;
  feelslike_f: any;
  vis_km: any;
  vis_miles: any;
  uv: any;
  gust_mph:any;
  gust_kph: any;
}
