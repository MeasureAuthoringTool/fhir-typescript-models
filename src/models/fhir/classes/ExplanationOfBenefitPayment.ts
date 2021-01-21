/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  Identifier,
  IExplanationOfBenefitPayment,
  Money,
  PrimitiveDate,
  FhirType
} from "../internal";

@FhirType("ExplanationOfBenefitPayment", "BackboneElement")
export class ExplanationOfBenefitPayment extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Payment";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("Money")
  public adjustment?: Money;

  @FhirField("CodeableConcept")
  public adjustmentReason?: CodeableConcept;

  @FhirField("PrimitiveDate")
  public date?: PrimitiveDate;

  @FhirField("Money")
  public amount?: Money;

  @FhirField("Identifier")
  public identifier?: Identifier;

  public static parse(
    json: IExplanationOfBenefitPayment,
    providedInstance: ExplanationOfBenefitPayment = new ExplanationOfBenefitPayment()
  ): ExplanationOfBenefitPayment {
    const newInstance: ExplanationOfBenefitPayment = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.adjustment !== undefined) {
      newInstance.adjustment = Money.parse(json.adjustment);
    }
    if (json.adjustmentReason !== undefined) {
      newInstance.adjustmentReason = CodeableConcept.parse(json.adjustmentReason);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDate.parsePrimitive(json.date, json._date);
    }
    if (json.amount !== undefined) {
      newInstance.amount = Money.parse(json.amount);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    return newInstance;
  }

  public static isExplanationOfBenefitPayment(input?: unknown): input is ExplanationOfBenefitPayment {
    const castInput = input as ExplanationOfBenefitPayment;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitPayment";
  }

  public toJSON(): IExplanationOfBenefitPayment {
    const result: IExplanationOfBenefitPayment = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.adjustment) {
      result.adjustment = this.adjustment.toJSON();
    }

    if (this.adjustmentReason) {
      result.adjustmentReason = this.adjustmentReason.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    return result;
  }

  public clone(): ExplanationOfBenefitPayment {
    return ExplanationOfBenefitPayment.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitPayment";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
