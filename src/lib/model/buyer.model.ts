import { IOrder } from './order.model';
import { IUser } from './user.model';

import { BuyerType } from './enumerations/buyer-type.model';
export interface IBuyer {
  id?: number;
  buyerType?: BuyerType | null;
  buyerAccountName?: string | null;
  buyerAddress?: string | null;
  buyerEmail?: string | null;
  buyerPhoneNumber?: string | null;
  users?: IUser[] | null;
  orders?: IOrder[] | null;
}

export class Buyer implements IBuyer {
  constructor(
    public id?: number,
    public buyerType?: BuyerType | null,
    public buyerAccountName?: string | null,
    public buyerAddress?: string | null,
    public buyerEmail?: string | null,
    public buyerPhoneNumber?: string | null,
    public users?: IUser[] | null,
    public orders?: IOrder[] | null
  ) {}
}
