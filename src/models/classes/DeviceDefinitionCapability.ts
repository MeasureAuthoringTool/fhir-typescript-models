/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IDeviceDefinitionCapability,
} from "../internal";

export class DeviceDefinitionCapability extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceDefinition.Capability";

  public type?: CodeableConcept;

  public description?: Array<CodeableConcept>;

  public static parse(
    json: IDeviceDefinitionCapability,
    providedInstance: DeviceDefinitionCapability = new DeviceDefinitionCapability()
  ): DeviceDefinitionCapability {
    const newInstance: DeviceDefinitionCapability = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.description) {
      newInstance.description = json.description.map((x) => CodeableConcept.parse(x));
    }
    return newInstance;
  }

  public static isDeviceDefinitionCapability(input?: unknown): input is DeviceDefinitionCapability {
    const castInput = input as DeviceDefinitionCapability;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceDefinitionCapability";
  }

  public toJSON(): IDeviceDefinitionCapability {
    const result: IDeviceDefinitionCapability = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.description) {
      result.description = this.description.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "DeviceDefinitionCapability";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
