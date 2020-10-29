/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IDeviceRequestParameter,
  PrimitiveBoolean,
  Quantity,
  Range,
  FieldMetadata
} from "../internal";

export class DeviceRequestParameter extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DeviceRequest.Parameter";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "code",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "value",
      fieldType: [CodeableConcept, Quantity, Range, PrimitiveBoolean],
      isArray: false
    }];
  }

  public code?: CodeableConcept;

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
