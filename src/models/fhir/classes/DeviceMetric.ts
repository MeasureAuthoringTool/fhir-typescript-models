/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DeviceMetricCalibration,
  DeviceMetricCategory,
  DeviceMetricColor,
  DeviceMetricOperationalStatus,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IDeviceMetric,
  Reference,
  Timing,
  FhirType
} from "../internal";

@FhirType("DeviceMetric", "DomainResource")
export class DeviceMetric extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceMetric";

  static readonly primaryCodePath: string | null = "type";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("CodeableConcept")
  public unit?: CodeableConcept;

  @FhirField("Reference")
  public source?: Reference;

  @FhirField("Reference")
  public parent?: Reference;

  @FhirField("DeviceMetricOperationalStatus")
  public operationalStatus?: DeviceMetricOperationalStatus;

  @FhirField("DeviceMetricColor")
  public color?: DeviceMetricColor;

  @FhirField("DeviceMetricCategory")
  public category?: DeviceMetricCategory;

  @FhirField("Timing")
  public measurementPeriod?: Timing;

  @FhirList("DeviceMetricCalibration")
  public calibration?: Array<DeviceMetricCalibration>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.type;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.type = primaryCode;
  }

  public static parse(
    json: IDeviceMetric,
    providedInstance: DeviceMetric = new DeviceMetric()
  ): DeviceMetric {
    const newInstance: DeviceMetric = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.unit !== undefined) {
      newInstance.unit = CodeableConcept.parse(json.unit);
    }
    if (json.source !== undefined) {
      newInstance.source = Reference.parse(json.source);
    }
    if (json.parent !== undefined) {
      newInstance.parent = Reference.parse(json.parent);
    }
    if (json.operationalStatus !== undefined) {
      newInstance.operationalStatus = DeviceMetricOperationalStatus.parsePrimitive(json.operationalStatus, json._operationalStatus);
    }
    if (json.color !== undefined) {
      newInstance.color = DeviceMetricColor.parsePrimitive(json.color, json._color);
    }
    if (json.category !== undefined) {
      newInstance.category = DeviceMetricCategory.parsePrimitive(json.category, json._category);
    }
    if (json.measurementPeriod !== undefined) {
      newInstance.measurementPeriod = Timing.parse(json.measurementPeriod);
    }
    if (json.calibration !== undefined) {
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

  public clone(): DeviceMetric {
    return DeviceMetric.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DeviceMetric";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
