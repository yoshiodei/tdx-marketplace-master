import { ICity } from './city.model';
import { ICountry } from './country.model';

export interface IRegion {
  id?: number;
  regionName?: string;
  country?: ICountry | null;
  cities?: ICity[] | null;
}

export class Region implements IRegion {
  constructor(public id?: number, public regionName?: string, public country?: ICountry | null, public cities?: ICity[] | null) {}
}
