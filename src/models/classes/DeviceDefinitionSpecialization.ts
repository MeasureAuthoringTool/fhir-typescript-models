/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IDeviceDefinitionSpecialization,
  PrimitiveString,
} from "../internal";

export class DeviceDefinitionSpecialization extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceDefinition.Specialization";

  public systemType?: PrimitiveString;

  public version?: PrimitiveString;

  public static parse(
    json: IDeviceDefinitionSpecialization,
    providedInstance: DeviceDefinitionSpecialization = new DeviceDefinitionSpecialization()
  ): DeviceDefinitionSpecialization {
    const newInstance: DeviceDefinitionSpecialization = BackboneElement.parse(json, providedInstance);
  
    if (json.systemType) {
      newInstance.systemType = PrimitiveString.parsePrimitive(json.systemType, json._systemType);
    }
    if (json.version) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    return newInstance;
  }

  public static isDeviceDefinitionSpecialization(input?: unknown): input is DeviceDefinitionSpecialization {
    const castInput = input as DeviceDefinitionSpecialization;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceDefinitionSpecialization";
  }

  public toJSON(): IDeviceDefinitionSpecialization {
    const result: IDeviceDefinitionSpecialization = super.toJSON();

    if (this.systemType) {
      result.systemType = this.systemType.value;
      result._systemType = Extension.serializePrimitiveExtension(this.systemType);
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "DeviceDefinitionSpecialization";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
