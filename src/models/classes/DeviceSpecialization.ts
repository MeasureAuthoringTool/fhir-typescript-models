/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IDeviceSpecialization,
  PrimitiveString,
} from "../internal";

export class DeviceSpecialization extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Device.Specialization";

  public systemType?: CodeableConcept;

  public version?: PrimitiveString;

  public static parse(
    json: IDeviceSpecialization,
    providedInstance: DeviceSpecialization = new DeviceSpecialization()
  ): DeviceSpecialization {
    const newInstance: DeviceSpecialization = BackboneElement.parse(json, providedInstance);
  
    if (json.systemType) {
      newInstance.systemType = CodeableConcept.parse(json.systemType);
    }
    if (json.version) {
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
  
  public getTypeName(): string {
    return "DeviceSpecialization";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
