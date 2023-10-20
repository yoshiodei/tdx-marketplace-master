
export interface IWarehouse {
  id?: number;
  warehouseName?: string;
}

export class Warehouse implements IWarehouse {
  constructor(public id?: number, public warehouseName?: string) {}
}
