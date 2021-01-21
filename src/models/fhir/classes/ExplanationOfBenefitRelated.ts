/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  Identifier,
  IExplanationOfBenefitRelated,
  Reference,
  FhirType
} from "../internal";

@FhirType("ExplanationOfBenefitRelated", "BackboneElement")
export class ExplanationOfBenefitRelated extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Related";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public claim?: Reference;

  @FhirField("CodeableConcept")
  public relationship?: CodeableConcept;

  @FhirField("Identifier")
  public reference?: Identifier;

  public static parse(
    json: IExplanationOfBenefitRelated,
    providedInstance: ExplanationOfBenefitRelated = new ExplanationOfBenefitRelated()
  ): ExplanationOfBenefitRelated {
    const newInstance: ExplanationOfBenefitRelated = BackboneElement.parse(json, providedInstance);
  
    if (json.claim !== undefined) {
      newInstance.claim = Reference.parse(json.claim);
    }
    if (json.relationship !== undefined) {
      newInstance.relationship = CodeableConcept.parse(json.relationship);
    }
    if (json.reference !== undefined) {
      newInstance.reference = Identifier.parse(json.reference);
    }
    return newInstance;
  }

  public static isExplanationOfBenefitRelated(input?: unknown): input is ExplanationOfBenefitRelated {
    const castInput = input as ExplanationOfBenefitRelated;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitRelated";
  }

  public toJSON(): IExplanationOfBenefitRelated {
    const result: IExplanationOfBenefitRelated = super.toJSON();

    if (this.claim) {
      result.claim = this.claim.toJSON();
    }

    if (this.relationship) {
      result.relationship = this.relationship.toJSON();
    }

    if (this.reference) {
      result.reference = this.reference.toJSON();
    }

    return result;
  }

  public clone(): ExplanationOfBenefitRelated {
    return ExplanationOfBenefitRelated.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitRelated";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
