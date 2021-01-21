/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IExplanationOfBenefitItemAdjudication,
  Money,
  PrimitiveDecimal,
  FhirType
} from "../internal";

@FhirType("ExplanationOfBenefitItemAdjudication", "BackboneElement")
export class ExplanationOfBenefitItemAdjudication extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Item.Adjudication";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public category?: CodeableConcept;

  @FhirField("CodeableConcept")
  public reason?: CodeableConcept;

  @FhirField("Money")
  public amount?: Money;

  @FhirField("PrimitiveDecimal")
  public value?: PrimitiveDecimal;

  public static parse(
    json: IExplanationOfBenefitItemAdjudication,
    providedInstance: ExplanationOfBenefitItemAdjudication = new ExplanationOfBenefitItemAdjudication()
  ): ExplanationOfBenefitItemAdjudication {
    const newInstance: ExplanationOfBenefitItemAdjudication = BackboneElement.parse(json, providedInstance);
  
    if (json.category !== undefined) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.reason !== undefined) {
      newInstance.reason = CodeableConcept.parse(json.reason);
    }
    if (json.amount !== undefined) {
      newInstance.amount = Money.parse(json.amount);
    }
    if (json.value !== undefined) {
      newInstance.value = PrimitiveDecimal.parsePrimitive(json.value, json._value);
    }
    return newInstance;
  }

  public static isExplanationOfBenefitItemAdjudication(input?: unknown): input is ExplanationOfBenefitItemAdjudication {
    const castInput = input as ExplanationOfBenefitItemAdjudication;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitItemAdjudication";
  }

  public toJSON(): IExplanationOfBenefitItemAdjudication {
    const result: IExplanationOfBenefitItemAdjudication = super.toJSON();

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.reason) {
      result.reason = this.reason.toJSON();
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }

  public clone(): ExplanationOfBenefitItemAdjudication {
    return ExplanationOfBenefitItemAdjudication.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitItemAdjudication";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
