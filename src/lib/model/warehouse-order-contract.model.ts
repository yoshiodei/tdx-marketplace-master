import { IDeliveryDetails } from './delivery-details.model';
import { IOrder } from './order.model';
import { IWarehouseListing } from './warehouse-listing.model';

import { CommodityGrade } from './enumerations/commodity-grade.model';
export interface IWarehouseOrderContract {
  id?: number;
  warehouseOrderQuantityInKg?: number;
  warehouseOrderGrade?: CommodityGrade;
  warehouseBid?: number;
  warehouseOrderContractId?: string;
  deliveryDetails?: IDeliveryDetails | null;
  order?: IOrder | null;
  warehouseListing?: IWarehouseListing | null;
}

export class WarehouseOrderContract implements IWarehouseOrderContract {
  constructor(
    public id?: number,
    public warehouseOrderQuantityInKg?: number,
    public warehouseOrderGrade?: CommodityGrade,
    public warehouseBid?: number,
    public warehouseOrderContractId?: string,
    public deliveryDetails?: IDeliveryDetails | null,
    public order?: IOrder | null,
    public warehouseListing?: IWarehouseListing | null
  ) {}
}
