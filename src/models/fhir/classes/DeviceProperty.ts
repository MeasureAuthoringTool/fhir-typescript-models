/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  FhirList,
  IDeviceProperty,
  Quantity,
  FhirType
} from "../internal";

@FhirType("DeviceProperty", "BackboneElement")
export class DeviceProperty extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Device.Property";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("Quantity")
  public valueQuantity?: Array<Quantity>;

  @FhirList("CodeableConcept")
  public valueCode?: Array<CodeableConcept>;

  public static parse(
    json: IDeviceProperty,
    providedInstance: DeviceProperty = new DeviceProperty()
  ): DeviceProperty {
    const newInstance: DeviceProperty = BackboneElement.parse(json, providedInstance);
  
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

  public static isDeviceProperty(input?: unknown): input is DeviceProperty {
    const castInput = input as DeviceProperty;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceProperty";
  }

  public toJSON(): IDeviceProperty {
    const result: IDeviceProperty = super.toJSON();

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

  public clone(): DeviceProperty {
    return DeviceProperty.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DeviceProperty";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
