/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  Coding,
  Element,
  IUsageContext,
  Quantity,
  Range,
  Reference,
} from "../internal";

export class UsageContext extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "UsageContext";

  public code?: Coding;

  public value?: CodeableConcept | Quantity | Range | Reference;

  public static parse(
    json: IUsageContext,
    providedInstance: UsageContext = new UsageContext()
  ): UsageContext {
    const newInstance: UsageContext = Element.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = Coding.parse(json.code);
    }
    if (json.valueCodeableConcept) {
      newInstance.value = CodeableConcept.parse(json.valueCodeableConcept);
    }
    if (json.valueQuantity) {
      newInstance.value = Quantity.parse(json.valueQuantity);
    }
    if (json.valueRange) {
      newInstance.value = Range.parse(json.valueRange);
    }
    if (json.valueReference) {
      newInstance.value = Reference.parse(json.valueReference);
    }
    return newInstance;
  }

  public static isUsageContext(input?: unknown): input is UsageContext {
    const castInput = input as UsageContext;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "UsageContext";
  }

  public toJSON(): IUsageContext {
    const result: IUsageContext = super.toJSON();

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

    if (this.value && Reference.isReference(this.value)) {
      result.valueReference = this.value.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "UsageContext";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
