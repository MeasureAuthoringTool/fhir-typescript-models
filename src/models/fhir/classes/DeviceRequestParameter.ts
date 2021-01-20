/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  IDeviceRequestParameter,
  PrimitiveBoolean,
  Quantity,
  Range,
  FhirType
} from "../internal";

@FhirType("DeviceRequestParameter", "BackboneElement")
export class DeviceRequestParameter extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceRequest.Parameter";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirChoice("CodeableConcept", "Quantity", "Range", "PrimitiveBoolean")
  public value?: CodeableConcept | Quantity | Range | PrimitiveBoolean;

  public static parse(
    json: IDeviceRequestParameter,
    providedInstance: DeviceRequestParameter = new DeviceRequestParameter()
  ): DeviceRequestParameter {
    const newInstance: DeviceRequestParameter = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.valueCodeableConcept !== undefined) {
      newInstance.value = CodeableConcept.parse(json.valueCodeableConcept);
    }
    if (json.valueQuantity !== undefined) {
      newInstance.value = Quantity.parse(json.valueQuantity);
    }
    if (json.valueRange !== undefined) {
      newInstance.value = Range.parse(json.valueRange);
    }
    if (json.valueBoolean !== undefined) {
      newInstance.value = PrimitiveBoolean.parsePrimitive(json.valueBoolean, json._valueBoolean);
    }
    return newInstance;
  }

  public static isDeviceRequestParameter(input?: unknown): input is DeviceRequestParameter {
    const castInput = input as DeviceRequestParameter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DeviceRequestParameter";
  }

  public toJSON(): IDeviceRequestParameter {
    const result: IDeviceRequestParameter = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.value && CodeableConcept.isCodeableConcept(this.value)) {
      result.valueCodeableConcept = this.value.toJSON();
    }

    if (this.value && Quantity.isQuantity(this.value)) {
      result.valueQuantity = this.value.toJSON();
    }

    if (this.value && Range.isRange(this.value)) {
      result.valueRange = this.value.toJSON();
    }

    if (this.value && PrimitiveBoolean.isPrimitiveBoolean(this.value)) {
      result.valueBoolean = this.value.value;
      result._valueBoolean = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }

  public clone(): DeviceRequestParameter {
    return DeviceRequestParameter.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DeviceRequestParameter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
