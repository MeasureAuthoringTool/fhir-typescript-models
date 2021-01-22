/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  Coding,
  Element,
  FhirChoice,
  FhirField,
  IUsageContext,
  Quantity,
  Range,
  Reference,
  FhirType
} from "../internal";

@FhirType("UsageContext", "Element")
export class UsageContext extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "UsageContext";

  static readonly primaryCodePath: string | null = "code";

  @FhirField("Coding")
  public code?: Coding;

  @FhirChoice("CodeableConcept", "Quantity", "Range", "Reference")
  public value?: CodeableConcept | Quantity | Range | Reference;

  get primaryCode(): Coding | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: Coding | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IUsageContext,
    providedInstance: UsageContext = new UsageContext()
  ): UsageContext {
    const newInstance: UsageContext = Element.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = Coding.parse(json.code);
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
    if (json.valueReference !== undefined) {
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

  public clone(): UsageContext {
    return UsageContext.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "UsageContext";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
