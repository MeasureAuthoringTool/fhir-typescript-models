/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("FHIRDeviceStatus", "PrimitiveCode")
export class FHIRDeviceStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "FHIRDeviceStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: FHIRDeviceStatus = new FHIRDeviceStatus()
  ): FHIRDeviceStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isFHIRDeviceStatus(input?: unknown): input is FHIRDeviceStatus {
    const castInput = input as FHIRDeviceStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "FHIRDeviceStatus";
  }

  public clone(): FHIRDeviceStatus {
    const result = new FHIRDeviceStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "FHIRDeviceStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
