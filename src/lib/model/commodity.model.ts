export interface ICommodity {
  id?: number;
  commodityName?: string;
  commoditySymbol?: string;
}

export class Commodity implements ICommodity {
  constructor(public id?: number, public commodityName?: string, public commoditySymbol?: string) {}
}
