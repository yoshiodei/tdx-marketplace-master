import { IDeliveryLocation } from './delivery-location.model';
import { IExchangeOrderContract } from './exchange-order-contract.model';
import { ISourcingOrderContract } from './sourcing-order-contract.model';
import { IWarehouseOrderContract } from './warehouse-order-contract.model';

import { DeliveryMethod } from './enumerations/delivery-method.model';
import { DeliveryStatus } from './enumerations/delivery-status.model';
export interface IDeliveryDetails {
  id?: number;
  deliveryMethod?: DeliveryMethod;
  deliveryPrice?: number | null;
  deliveryStatus?: DeliveryStatus;
  deliveryDate?: Date | null;
  deliveryTrackerUrl?: string | null;
  deliveryInstructions?: string | null;
  deliveryLocation?: IDeliveryLocation | null;
  sourcingOrderContract?: ISourcingOrderContract | null;
  exchangeOrderContract?: IExchangeOrderContract | null;
  warehouseOrderContract?: IWarehouseOrderContract | null;
}

export class DeliveryDetails implements IDeliveryDetails {
  constructor(
    public id?: number,
    public deliveryMethod?: DeliveryMethod,
    public deliveryPrice?: number | null,
    public deliveryStatus?: DeliveryStatus,
    public deliveryDate?: Date | null,
    public deliveryTrackerUrl?: string | null,
    public deliveryInstructions?: string | null,
    public deliveryLocation?: IDeliveryLocation | null,
    public sourcingOrderContract?: ISourcingOrderContract | null,
    public exchangeOrderContract?: IExchangeOrderContract | null,
    public warehouseOrderContract?: IWarehouseOrderContract | null
  ) {}
}
