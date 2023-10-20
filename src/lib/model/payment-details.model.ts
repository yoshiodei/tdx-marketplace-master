import { IOrder } from './order.model';

import { PaymentStatus } from './enumerations/payment-status.model';
export interface IPaymentDetails {
  id?: number;
  paymentStatus?: PaymentStatus | null;
  order?: IOrder | null;
}

export class PaymentDetails implements IPaymentDetails {
  constructor(public id?: number, public paymentStatus?: PaymentStatus | null, public order?: IOrder | null) {}
}
