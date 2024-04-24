// export interface ILocation{
//   location: {
//       name:string,
//       region: string,
//       country: string,
//       lat: number,
//       lon:number,
//       tz_id:string,
//       localtime_epoch:number,
//       localtime: string
//   },
//   current: {
//       last_updated_epoch: any,
//       last_updated: string,
//       temp_c: any,
//       temp_f: any,
//       is_day: any,
//       condition: {
//           text:string,
//           icon:string,
//           code:number
//       },
//       wind_mph: any,
//       wind_kph:any,
//       wind_degree: number,
//       wind_dir: string,
//       pressure_mb: any,
//       pressure_in: any,
//       precip_mm: any,
//       precip_in:any,
//       humidity: number,
//       cloud: number,
//       feelslike_c: any,
//       feelslike_f: any,
//       vis_km: any,
//       vis_miles: any,
//       u: any,
//       gust_mph: any,
//       gust_kph: any,
//       air_quality:AirQuality
//       ,
//   }
// }

// =========================

export interface ILocation {
  location: Location
  current: Current
}

export interface Location {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export interface Current {
  last_updated_epoch: number
  last_updated: string
  temp_c: number
  temp_f: number
  is_day: number
  condition: Condition
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  vis_km: number
  vis_miles: number
  uv: number
  gust_mph: number
  gust_kph: number
  air_quality: AirQuality
}

export interface Condition {
  text: string
  icon: string
  code: number
}

export interface AirQuality {
  co: number
  no2: number
  o3: number
  so2: number
  pm2_5: number
  pm10: number
  "us-epa-index": number
  "gb-defra-index": number
}
