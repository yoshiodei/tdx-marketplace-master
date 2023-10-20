
export interface ILocationAddress {
  id?: number;
  addressLine1?: string | null;
  addressLine2?: string | null;
}

export class LocationAddress implements ILocationAddress {
  constructor(
    public id?: number,
    public addressLine1?: string | null,
    public addressLine2?: string | null,
  ) {}
}
