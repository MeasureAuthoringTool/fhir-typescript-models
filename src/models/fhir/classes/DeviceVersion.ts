/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  Identifier,
  IDeviceVersion,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("DeviceVersion", "BackboneElement")
export class DeviceVersion extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Device.Version";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("Identifier")
  public component?: Identifier;

  @FhirField("PrimitiveString")
  public value?: PrimitiveString;

  public static parse(
    json: IDeviceVersion,
    providedInstance: DeviceVersion = new DeviceVersion()
  ): DeviceVersion {
    const newInstance: DeviceVersion = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.component !== undefined) {
      newInstance.component = Identifier.parse(json.component);
    }
    if (json.value !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    return newInstance;
  }

  public static isDeviceVersion(input?: unknown): input is DeviceVersion {
    const castInput = input as DeviceVersion;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceVersion";
  }

  public toJSON(): IDeviceVersion {
    const result: IDeviceVersion = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.component) {
      result.component = this.component.toJSON();
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }

  public clone(): DeviceVersion {
    return DeviceVersion.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DeviceVersion";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
