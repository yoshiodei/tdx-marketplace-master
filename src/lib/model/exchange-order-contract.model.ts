import { IDeliveryDetails } from './delivery-details.model';
import { IExchangeListing } from './exchange-listing.model';
import { IOrder } from './order.model';

import { CommodityGrade } from './enumerations/commodity-grade.model';
import { ContractStatus } from './enumerations/contract-status.model';
export interface IExchangeOrderContract {
  id?: number;
  orderQuantityInKg?: number;
  orderPrice?: number;
  exchangeGrade?: CommodityGrade;
  contractStatus?: ContractStatus;
  exchangeOrderContractId?: string;
  deliveryDetails?: IDeliveryDetails | null;
  order?: IOrder | null;
  exchangeListing?: IExchangeListing | null;
}

export class ExchangeOrderContract implements IExchangeOrderContract {
  constructor(
    public id?: number,
    public orderQuantityInKg?: number,
    public orderPrice?: number,
    public exchangeGrade?: CommodityGrade,
    public contractStatus?: ContractStatus,
    public exchangeOrderContractId?: string,
    public deliveryDetails?: IDeliveryDetails | null,
    public order?: IOrder | null,
    public exchangeListing?: IExchangeListing | null
  ) {}
}
