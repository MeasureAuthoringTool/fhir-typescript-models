/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class DeviceMetricCalibrationType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceMetricCalibrationType";

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
  
  public getTypeName(): string {
    return "DeviceMetricCalibrationType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
