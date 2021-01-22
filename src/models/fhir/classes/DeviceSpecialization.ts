/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IDeviceSpecialization,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("DeviceSpecialization", "BackboneElement")
export class DeviceSpecialization extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Device.Specialization";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public systemType?: CodeableConcept;

  @FhirField("PrimitiveString")
  public version?: PrimitiveString;

  public static parse(
    json: IDeviceSpecialization,
    providedInstance: DeviceSpecialization = new DeviceSpecialization()
  ): DeviceSpecialization {
    const newInstance: DeviceSpecialization = BackboneElement.parse(json, providedInstance);
  
    if (json.systemType !== undefined) {
      newInstance.systemType = CodeableConcept.parse(json.systemType);
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    return newInstance;
  }

  public static isDeviceSpecialization(input?: unknown): input is DeviceSpecialization {
    const castInput = input as DeviceSpecialization;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceSpecialization";
  }

  public toJSON(): IDeviceSpecialization {
    const result: IDeviceSpecialization = super.toJSON();

    if (this.systemType) {
      result.systemType = this.systemType.toJSON();
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    return result;
  }

  public clone(): DeviceSpecialization {
    return DeviceSpecialization.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DeviceSpecialization";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
