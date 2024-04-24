import { ILocation } from "./ILocation";

export interface ICurrent extends ILocation{
  last_updated_epoch: number;
  last_updated:string;
  temp_c: any;
  temp_f: any;
  is_day: number;
}

export interface ICondition extends ICurrent {
  text: string;
  icon: string;
  code: number
}
