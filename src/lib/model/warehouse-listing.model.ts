import { ICity } from './city.model';
import { ICommodity } from './commodity.model';
import { IWarehouseOrderContract } from './warehouse-order-contract.model';
import { IWarehouse } from './warehouse.model';

import { CommodityGrade } from './enumerations/commodity-grade.model';
import { ListingStatus } from './enumerations/listing-status.model';
export interface IWarehouseListing {
  id?: number;
  warehouseListingStatus?: ListingStatus;
  warehouseBatchNumber?: string | null;
  warehouseListingQuantityInKg?: number;
  warehouseListingCommodityGrade?: CommodityGrade;
  minimumBid?: number;
  warehouseReferenceCode?: string | null;
  commodity?: ICommodity | null;
  source?: ICity | null;
  location?: IWarehouse | null;
  warehouseOrderContracts?: IWarehouseOrderContract[] | null;
}

export class WarehouseListing implements IWarehouseListing {
  constructor(
    public id?: number,
    public warehouseListingStatus?: ListingStatus,
    public warehouseBatchNumber?: string | null,
    public warehouseListingQuantityInKg?: number,
    public warehouseListingCommodityGrade?: CommodityGrade,
    public minimumBid?: number,
    public warehouseReferenceCode?: string | null,
    public commodity?: ICommodity | null,
    public source?: ICity | null,
    public location?: IWarehouse | null,
    public warehouseOrderContracts?: IWarehouseOrderContract[] | null,
  ) {}
}
