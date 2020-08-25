/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class DeviceMetricCalibrationState extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceMetricCalibrationState";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DeviceMetricCalibrationState = new DeviceMetricCalibrationState()
  ): DeviceMetricCalibrationState {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDeviceMetricCalibrationState(input?: unknown): input is DeviceMetricCalibrationState {
    const castInput = input as DeviceMetricCalibrationState;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceMetricCalibrationState";
  }
  
  public getTypeName(): string {
    return "DeviceMetricCalibrationState";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
