/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("DeviceMetricCalibrationType", "PrimitiveCode")
export class DeviceMetricCalibrationType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceMetricCalibrationType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DeviceMetricCalibrationType = new DeviceMetricCalibrationType()
  ): DeviceMetricCalibrationType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDeviceMetricCalibrationType(input?: unknown): input is DeviceMetricCalibrationType {
    const castInput = input as DeviceMetricCalibrationType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceMetricCalibrationType";
  }

  public clone(): DeviceMetricCalibrationType {
    const result = new DeviceMetricCalibrationType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "DeviceMetricCalibrationType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
