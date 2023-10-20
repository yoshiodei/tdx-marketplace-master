import { IOrder } from './order.model';

export interface IOrderFee {
  id?: number;
  brokersCommission?: number;
  valueAddedTax?: number;
  levyTax?: number;
  order?: IOrder | null;
}

export class OrderFee implements IOrderFee {
  constructor(
    public id?: number,
    public brokersCommission?: number,
    public valueAddedTax?: number,
    public levyTax?: number,
    public order?: IOrder | null
  ) {}
}
