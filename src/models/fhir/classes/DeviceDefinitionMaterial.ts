/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IDeviceDefinitionMaterial,
  PrimitiveBoolean,
  FhirType
} from "../internal";

@FhirType("DeviceDefinitionMaterial", "BackboneElement")
export class DeviceDefinitionMaterial extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceDefinition.Material";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public substance?: CodeableConcept;

  @FhirField("PrimitiveBoolean")
  public alternate?: PrimitiveBoolean;

  @FhirField("PrimitiveBoolean")
  public allergenicIndicator?: PrimitiveBoolean;

  public static parse(
    json: IDeviceDefinitionMaterial,
    providedInstance: DeviceDefinitionMaterial = new DeviceDefinitionMaterial()
  ): DeviceDefinitionMaterial {
    const newInstance: DeviceDefinitionMaterial = BackboneElement.parse(json, providedInstance);
  
    if (json.substance !== undefined) {
      newInstance.substance = CodeableConcept.parse(json.substance);
    }
    if (json.alternate !== undefined) {
      newInstance.alternate = PrimitiveBoolean.parsePrimitive(json.alternate, json._alternate);
    }
    if (json.allergenicIndicator !== undefined) {
      newInstance.allergenicIndicator = PrimitiveBoolean.parsePrimitive(json.allergenicIndicator, json._allergenicIndicator);
    }
    return newInstance;
  }

  public static isDeviceDefinitionMaterial(input?: unknown): input is DeviceDefinitionMaterial {
    const castInput = input as DeviceDefinitionMaterial;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceDefinitionMaterial";
  }

  public toJSON(): IDeviceDefinitionMaterial {
    const result: IDeviceDefinitionMaterial = super.toJSON();

    if (this.substance) {
      result.substance = this.substance.toJSON();
    }

    if (this.alternate) {
      result.alternate = this.alternate.value;
      result._alternate = Extension.serializePrimitiveExtension(this.alternate);
    }

    if (this.allergenicIndicator) {
      result.allergenicIndicator = this.allergenicIndicator.value;
      result._allergenicIndicator = Extension.serializePrimitiveExtension(this.allergenicIndicator);
    }

    return result;
  }

  public clone(): DeviceDefinitionMaterial {
    return DeviceDefinitionMaterial.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DeviceDefinitionMaterial";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
