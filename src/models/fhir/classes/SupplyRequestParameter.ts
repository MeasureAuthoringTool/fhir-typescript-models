/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ISupplyRequestParameter,
  PrimitiveBoolean,
  Quantity,
  Range,
  FieldMetadata
} from "../internal";

export class SupplyRequestParameter extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SupplyRequest.Parameter";
  
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
    json: ISupplyRequestParameter,
    providedInstance: SupplyRequestParameter = new SupplyRequestParameter()
  ): SupplyRequestParameter {
    const newInstance: SupplyRequestParameter = BackboneElement.parse(json, providedInstance);
  
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

  public static isSupplyRequestParameter(input?: unknown): input is SupplyRequestParameter {
    const castInput = input as SupplyRequestParameter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SupplyRequestParameter";
  }

  public toJSON(): ISupplyRequestParameter {
    const result: ISupplyRequestParameter = super.toJSON();

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

  public clone(): SupplyRequestParameter {
    return SupplyRequestParameter.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SupplyRequestParameter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
