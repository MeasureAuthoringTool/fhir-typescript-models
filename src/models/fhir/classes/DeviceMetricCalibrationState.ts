/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("DeviceMetricCalibrationState", "PrimitiveCode")
export class DeviceMetricCalibrationState extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceMetricCalibrationState";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): DeviceMetricCalibrationState {
    const result = new DeviceMetricCalibrationState();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "DeviceMetricCalibrationState";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
