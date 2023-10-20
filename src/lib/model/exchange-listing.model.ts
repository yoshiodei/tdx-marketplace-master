import { ICity } from './city.model';
import { ICommodity } from './commodity.model';
import { IExchangeOrderContract } from './exchange-order-contract.model';
import { IWarehouse } from './warehouse.model';

import { CommodityGrade } from './enumerations/commodity-grade.model';
import { ListingStatus } from './enumerations/listing-status.model';
export interface IExchangeListing {
  id?: number;
  exchangeListingStatus?: ListingStatus;
  exchangeBatchNumber?: string | null;
  exchangeListingQuantityInKg?: number;
  exchangeListingCommodityGrade?: CommodityGrade;
  exchangeReferenceCode?: string | null;
  listingSymbol?: string;
  sellingPrice?: number;
  commodity?: ICommodity | null;
  location?: IWarehouse | null;
  source?: ICity | null;
  exchangeOrderContracts?: IExchangeOrderContract[] | null;
}

export class ExchangeListing implements IExchangeListing {
  constructor(
    public id?: number,
    public exchangeListingStatus?: ListingStatus,
    public exchangeBatchNumber?: string | null,
    public exchangeListingQuantityInKg?: number,
    public exchangeListingCommodityGrade?: CommodityGrade,
    public exchangeReferenceCode?: string | null,
    public listingSymbol?: string,
    public sellingPrice?: number,
    public commodity?: ICommodity | null,
    public location?: IWarehouse | null,
    public source?: ICity | null,
    public exchangeOrderContracts?: IExchangeOrderContract[] | null
  ) {}
}
