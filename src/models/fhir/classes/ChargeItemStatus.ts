/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ChargeItemStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ChargeItemStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ChargeItemStatus = new ChargeItemStatus()
  ): ChargeItemStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isChargeItemStatus(input?: unknown): input is ChargeItemStatus {
    const castInput = input as ChargeItemStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ChargeItemStatus";
  }
  
  public getTypeName(): string {
    return "ChargeItemStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
