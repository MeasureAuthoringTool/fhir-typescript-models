/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  Identifier,
  IExplanationOfBenefitPayment,
  Money,
  PrimitiveDate,
} from "../internal";

export class ExplanationOfBenefitPayment extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Payment";

  public type?: CodeableConcept;

  public adjustment?: Money;

  public adjustmentReason?: CodeableConcept;

  public date?: PrimitiveDate;

  public amount?: Money;

  public identifier?: Identifier;

  public static parse(
    json: IExplanationOfBenefitPayment,
    providedInstance: ExplanationOfBenefitPayment = new ExplanationOfBenefitPayment()
  ): ExplanationOfBenefitPayment {
    const newInstance: ExplanationOfBenefitPayment = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.adjustment) {
      newInstance.adjustment = Money.parse(json.adjustment);
    }
    if (json.adjustmentReason) {
      newInstance.adjustmentReason = CodeableConcept.parse(json.adjustmentReason);
    }
    if (json.date) {
      newInstance.date = PrimitiveDate.parsePrimitive(json.date, json._date);
    }
    if (json.amount) {
      newInstance.amount = Money.parse(json.amount);
    }
    if (json.identifier) {
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
  
  public getTypeName(): string {
    return "ExplanationOfBenefitPayment";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
