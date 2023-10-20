import { IBuyer } from './buyer.model';
import { IOrderFee } from './order-fee.model';
import { IPaymentDetails } from './payment-details.model';

import { OrderPaymentMethod } from './enumerations/order-payment-method.model';
import { OrderStatus } from './enumerations/order-status.model';
export interface IOrder {
  id?: number;
  totalOrderQuantityInKg?: number;
  totalOrderCost?: number;
  orderStatus?: OrderStatus;
  orderPaymentMethod?: OrderPaymentMethod;
  orderId?: string;
  paymentDetails?: IPaymentDetails | null;
  buyer?: IBuyer | null;
  orderFee?: IOrderFee | null;
}

export class Order implements IOrder {
  constructor(
    public id?: number,
    public totalOrderQuantityInKg?: number,
    public totalOrderCost?: number,
    public orderStatus?: OrderStatus,
    public orderPaymentMethod?: OrderPaymentMethod,
    public orderId?: string,
    public paymentDetails?: IPaymentDetails | null,
    public buyer?: IBuyer | null,
    public orderFee?: IOrderFee | null
  ) {}
}
