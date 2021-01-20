/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  IDeviceDefinitionProperty,
  Quantity,
  FhirType
} from "../internal";

@FhirType("DeviceDefinitionProperty", "BackboneElement")
export class DeviceDefinitionProperty extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceDefinition.Property";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("Quantity")
  public valueQuantity?: Array<Quantity>;

  @FhirList("CodeableConcept")
  public valueCode?: Array<CodeableConcept>;

  public static parse(
    json: IDeviceDefinitionProperty,
    providedInstance: DeviceDefinitionProperty = new DeviceDefinitionProperty()
  ): DeviceDefinitionProperty {
    const newInstance: DeviceDefinitionProperty = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.valueQuantity !== undefined) {
      newInstance.valueQuantity = json.valueQuantity.map((x) => Quantity.parse(x));
    }
    if (json.valueCode !== undefined) {
      newInstance.valueCode = json.valueCode.map((x) => CodeableConcept.parse(x));
    }
    return newInstance;
  }

  public static isDeviceDefinitionProperty(input?: unknown): input is DeviceDefinitionProperty {
    const castInput = input as DeviceDefinitionProperty;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceDefinitionProperty";
  }

  public toJSON(): IDeviceDefinitionProperty {
    const result: IDeviceDefinitionProperty = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.valueQuantity) {
      result.valueQuantity = this.valueQuantity.map((x) => x.toJSON());
    }

    if (this.valueCode) {
      result.valueCode = this.valueCode.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): DeviceDefinitionProperty {
    return DeviceDefinitionProperty.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DeviceDefinitionProperty";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
