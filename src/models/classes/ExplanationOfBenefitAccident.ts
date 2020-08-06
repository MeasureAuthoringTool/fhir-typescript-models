/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Address,
  BackboneElement,
  CodeableConcept,
  Extension,
  IExplanationOfBenefitAccident,
  PrimitiveDate,
  Reference,
} from "../internal";

export class ExplanationOfBenefitAccident extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Accident";

  public date?: PrimitiveDate;

  public type?: CodeableConcept;

  public location?: Address | Reference;

  public static parse(
    json: IExplanationOfBenefitAccident,
    providedInstance: ExplanationOfBenefitAccident = new ExplanationOfBenefitAccident()
  ): ExplanationOfBenefitAccident {
    const newInstance: ExplanationOfBenefitAccident = BackboneElement.parse(json, providedInstance);
  
    if (json.date) {
      newInstance.date = PrimitiveDate.parsePrimitive(json.date, json._date);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.locationAddress) {
      newInstance.location = Address.parse(json.locationAddress);
    }
    if (json.locationReference) {
      newInstance.location = Reference.parse(json.locationReference);
    }
    return newInstance;
  }

  public static isExplanationOfBenefitAccident(input?: unknown): input is ExplanationOfBenefitAccident {
    const castInput = input as ExplanationOfBenefitAccident;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitAccident";
  }

  public toJSON(): IExplanationOfBenefitAccident {
    const result: IExplanationOfBenefitAccident = super.toJSON();

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.location && Address.isAddress(this.location)) {
      result.locationAddress = this.location.toJSON();
    }

    if (this.location && Reference.isReference(this.location)) {
      result.locationReference = this.location.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ExplanationOfBenefitAccident";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
