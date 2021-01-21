/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Address,
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  IExplanationOfBenefitAccident,
  PrimitiveDate,
  Reference,
  FhirType
} from "../internal";

@FhirType("ExplanationOfBenefitAccident", "BackboneElement")
export class ExplanationOfBenefitAccident extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Accident";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveDate")
  public date?: PrimitiveDate;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirChoice("Address", "Reference")
  public location?: Address | Reference;

  public static parse(
    json: IExplanationOfBenefitAccident,
    providedInstance: ExplanationOfBenefitAccident = new ExplanationOfBenefitAccident()
  ): ExplanationOfBenefitAccident {
    const newInstance: ExplanationOfBenefitAccident = BackboneElement.parse(json, providedInstance);
  
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDate.parsePrimitive(json.date, json._date);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.locationAddress !== undefined) {
      newInstance.location = Address.parse(json.locationAddress);
    }
    if (json.locationReference !== undefined) {
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

  public clone(): ExplanationOfBenefitAccident {
    return ExplanationOfBenefitAccident.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitAccident";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
