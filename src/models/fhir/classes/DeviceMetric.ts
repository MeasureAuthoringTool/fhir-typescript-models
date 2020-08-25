/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DeviceMetricCalibration,
  DeviceMetricCategory,
  DeviceMetricColor,
  DeviceMetricOperationalStatus,
  DomainResource,
  Extension,
  Identifier,
  IDeviceMetric,
  Reference,
  Timing,
} from "../internal";

export class DeviceMetric extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceMetric";

  public identifier?: Array<Identifier>;

  public type?: CodeableConcept;

  public unit?: CodeableConcept;

  public source?: Reference;

  public parent?: Reference;

  public operationalStatus?: DeviceMetricOperationalStatus;

  public color?: DeviceMetricColor;

  public category?: DeviceMetricCategory;

  public measurementPeriod?: Timing;

  public calibration?: Array<DeviceMetricCalibration>;

  public static parse(
    json: IDeviceMetric,
    providedInstance: DeviceMetric = new DeviceMetric()
  ): DeviceMetric {
    const newInstance: DeviceMetric = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.unit) {
      newInstance.unit = CodeableConcept.parse(json.unit);
    }
    if (json.source) {
      newInstance.source = Reference.parse(json.source);
    }
    if (json.parent) {
      newInstance.parent = Reference.parse(json.parent);
    }
    if (json.operationalStatus) {
      newInstance.operationalStatus = DeviceMetricOperationalStatus.parsePrimitive(json.operationalStatus, json._operationalStatus);
    }
    if (json.color) {
      newInstance.color = DeviceMetricColor.parsePrimitive(json.color, json._color);
    }
    if (json.category) {
      newInstance.category = DeviceMetricCategory.parsePrimitive(json.category, json._category);
    }
    if (json.measurementPeriod) {
      newInstance.measurementPeriod = Timing.parse(json.measurementPeriod);
    }
    if (json.calibration) {
      newInstance.calibration = json.calibration.map((x) => DeviceMetricCalibration.parse(x));
    }
    return newInstance;
  }

  public static isDeviceMetric(input?: unknown): input is DeviceMetric {
    const castInput = input as DeviceMetric;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceMetric";
  }

  public toJSON(): IDeviceMetric {
    const result: IDeviceMetric = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.unit) {
      result.unit = this.unit.toJSON();
    }

    if (this.source) {
      result.source = this.source.toJSON();
    }

    if (this.parent) {
      result.parent = this.parent.toJSON();
    }

    if (this.operationalStatus) {
      result.operationalStatus = this.operationalStatus.value;
      result._operationalStatus = Extension.serializePrimitiveExtension(this.operationalStatus);
    }

    if (this.color) {
      result.color = this.color.value;
      result._color = Extension.serializePrimitiveExtension(this.color);
    }

    if (this.category) {
      result.category = this.category.value;
      result._category = Extension.serializePrimitiveExtension(this.category);
    }

    if (this.measurementPeriod) {
      result.measurementPeriod = this.measurementPeriod.toJSON();
    }

    if (this.calibration) {
      result.calibration = this.calibration.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "DeviceMetric";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
