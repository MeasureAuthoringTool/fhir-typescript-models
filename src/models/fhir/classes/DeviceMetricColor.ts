/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("DeviceMetricColor", "PrimitiveCode")
export class DeviceMetricColor extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceMetricColor";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DeviceMetricColor = new DeviceMetricColor()
  ): DeviceMetricColor {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDeviceMetricColor(input?: unknown): input is DeviceMetricColor {
    const castInput = input as DeviceMetricColor;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceMetricColor";
  }

  public clone(): DeviceMetricColor {
    const result = new DeviceMetricColor();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "DeviceMetricColor";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
