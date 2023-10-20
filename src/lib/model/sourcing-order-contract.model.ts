import { ICommodity } from './commodity.model';
import { IDeliveryDetails } from './delivery-details.model';
import { IOrder } from './order.model';

import { CommodityGrade } from './enumerations/commodity-grade.model';
export interface ISourcingOrderContract {
  id?: number;
  sourcingOrderQuantityInKg?: number;
  sourcingOrderCommodityGrade?: CommodityGrade;
  sourcingOrderPrice?: number;
  sourcingOrderContractId?: string;
  deliveryDetails?: IDeliveryDetails | null;
  order?: IOrder | null;
  commodity?: ICommodity | null;
}

export class SourcingOrderContract implements ISourcingOrderContract {
  constructor(
    public id?: number,
    public sourcingOrderQuantityInKg?: number,
    public sourcingOrderCommodityGrade?: CommodityGrade,
    public sourcingOrderPrice?: number,
    public sourcingOrderContractId?: string,
    public deliveryDetails?: IDeliveryDetails | null,
    public order?: IOrder | null,
    public commodity?: ICommodity | null
  ) {}
}
