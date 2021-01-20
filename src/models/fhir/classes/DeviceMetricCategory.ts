/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("DeviceMetricCategory", "PrimitiveCode")
export class DeviceMetricCategory extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceMetricCategory";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DeviceMetricCategory = new DeviceMetricCategory()
  ): DeviceMetricCategory {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDeviceMetricCategory(input?: unknown): input is DeviceMetricCategory {
    const castInput = input as DeviceMetricCategory;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceMetricCategory";
  }

  public clone(): DeviceMetricCategory {
    const result = new DeviceMetricCategory();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "DeviceMetricCategory";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
