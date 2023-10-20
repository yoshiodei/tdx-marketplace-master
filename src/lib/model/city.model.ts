import { IRegion } from './region.model';

export interface ICity {
  id?: number;
  cityName?: string;
  citySymbol?: string;
  region?: IRegion | null;
}

export class City implements ICity {
  constructor(
    public id?: number,
    public cityName?: string,
    public citySymbol?: string,
    public region?: IRegion | null,
  ) {}
}
