/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("SupplyDeliveryStatus", "PrimitiveCode")
export class SupplyDeliveryStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SupplyDeliveryStatus";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): SupplyDeliveryStatus {
    const result = new SupplyDeliveryStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "SupplyDeliveryStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
