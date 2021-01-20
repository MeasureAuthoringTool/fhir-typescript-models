/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ChargeItemStatus", "PrimitiveCode")
export class ChargeItemStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ChargeItemStatus";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): ChargeItemStatus {
    const result = new ChargeItemStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ChargeItemStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
