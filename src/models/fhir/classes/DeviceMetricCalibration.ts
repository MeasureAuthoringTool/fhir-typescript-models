/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  DeviceMetricCalibrationState,
  DeviceMetricCalibrationType,
  Extension,
  FhirField,
  IDeviceMetricCalibration,
  PrimitiveInstant,
  FhirType
} from "../internal";

@FhirType("DeviceMetricCalibration", "BackboneElement")
export class DeviceMetricCalibration extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceMetric.Calibration";

  static readonly primaryCodePath: string | null = null;

  @FhirField("DeviceMetricCalibrationType")
  public type?: DeviceMetricCalibrationType;

  @FhirField("DeviceMetricCalibrationState")
  public state?: DeviceMetricCalibrationState;

  @FhirField("PrimitiveInstant")
  public time?: PrimitiveInstant;

  public static parse(
    json: IDeviceMetricCalibration,
    providedInstance: DeviceMetricCalibration = new DeviceMetricCalibration()
  ): DeviceMetricCalibration {
    const newInstance: DeviceMetricCalibration = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = DeviceMetricCalibrationType.parsePrimitive(json.type, json._type);
    }
    if (json.state !== undefined) {
      newInstance.state = DeviceMetricCalibrationState.parsePrimitive(json.state, json._state);
    }
    if (json.time !== undefined) {
      newInstance.time = PrimitiveInstant.parsePrimitive(json.time, json._time);
    }
    return newInstance;
  }

  public static isDeviceMetricCalibration(input?: unknown): input is DeviceMetricCalibration {
    const castInput = input as DeviceMetricCalibration;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceMetricCalibration";
  }

  public toJSON(): IDeviceMetricCalibration {
    const result: IDeviceMetricCalibration = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.state) {
      result.state = this.state.value;
      result._state = Extension.serializePrimitiveExtension(this.state);
    }

    if (this.time) {
      result.time = this.time.value;
      result._time = Extension.serializePrimitiveExtension(this.time);
    }

    return result;
  }

  public clone(): DeviceMetricCalibration {
    return DeviceMetricCalibration.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DeviceMetricCalibration";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
