/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class SupplyDeliveryStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SupplyDeliveryStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SupplyDeliveryStatus = new SupplyDeliveryStatus()
  ): SupplyDeliveryStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSupplyDeliveryStatus(input?: unknown): input is SupplyDeliveryStatus {
    const castInput = input as SupplyDeliveryStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SupplyDeliveryStatus";
  }
  
  public getTypeName(): string {
    return "SupplyDeliveryStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
