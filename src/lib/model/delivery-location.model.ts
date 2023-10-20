import { IBuyer } from './buyer.model';
import { ICity } from './city.model';
import { ILocationAddress } from './location-address.model';

export interface IDeliveryLocation {
  id?: number;
  deliveryLocationContactNumber?: string;
  gpsLocation?: string;
  locationAddress?: ILocationAddress | null;
  buyer?: IBuyer | null;
  source?: ICity | null;
}

export class DeliveryLocation implements IDeliveryLocation {
  constructor(
    public id?: number,
    public deliveryLocationContactNumber?: string,
    public gpsLocation?: string,
    public locationAddress?: ILocationAddress | null,
    public buyer?: IBuyer | null,
    public source?: ICity | null
  ) {}
}
