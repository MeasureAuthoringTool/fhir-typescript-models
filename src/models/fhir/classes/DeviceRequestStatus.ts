/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("DeviceRequestStatus", "PrimitiveCode")
export class DeviceRequestStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceRequestStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DeviceRequestStatus = new DeviceRequestStatus()
  ): DeviceRequestStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDeviceRequestStatus(input?: unknown): input is DeviceRequestStatus {
    const castInput = input as DeviceRequestStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceRequestStatus";
  }

  public clone(): DeviceRequestStatus {
    const result = new DeviceRequestStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "DeviceRequestStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
