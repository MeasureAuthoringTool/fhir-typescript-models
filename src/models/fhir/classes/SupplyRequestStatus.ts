/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("SupplyRequestStatus", "PrimitiveCode")
export class SupplyRequestStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SupplyRequestStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SupplyRequestStatus = new SupplyRequestStatus()
  ): SupplyRequestStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSupplyRequestStatus(input?: unknown): input is SupplyRequestStatus {
    const castInput = input as SupplyRequestStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SupplyRequestStatus";
  }

  public clone(): SupplyRequestStatus {
    const result = new SupplyRequestStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "SupplyRequestStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
