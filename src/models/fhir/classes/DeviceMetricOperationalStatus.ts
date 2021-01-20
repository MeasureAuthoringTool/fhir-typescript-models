/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("DeviceMetricOperationalStatus", "PrimitiveCode")
export class DeviceMetricOperationalStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceMetricOperationalStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DeviceMetricOperationalStatus = new DeviceMetricOperationalStatus()
  ): DeviceMetricOperationalStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDeviceMetricOperationalStatus(input?: unknown): input is DeviceMetricOperationalStatus {
    const castInput = input as DeviceMetricOperationalStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceMetricOperationalStatus";
  }

  public clone(): DeviceMetricOperationalStatus {
    const result = new DeviceMetricOperationalStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "DeviceMetricOperationalStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
