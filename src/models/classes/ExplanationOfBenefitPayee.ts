/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IExplanationOfBenefitPayee,
  Reference,
} from "../internal";

export class ExplanationOfBenefitPayee extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Payee";

  public type?: CodeableConcept;

  public party?: Reference;

  public static parse(
    json: IExplanationOfBenefitPayee,
    providedInstance: ExplanationOfBenefitPayee = new ExplanationOfBenefitPayee()
  ): ExplanationOfBenefitPayee {
    const newInstance: ExplanationOfBenefitPayee = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.party) {
      newInstance.party = Reference.parse(json.party);
    }
    return newInstance;
  }

  public static isExplanationOfBenefitPayee(input?: unknown): input is ExplanationOfBenefitPayee {
    const castInput = input as ExplanationOfBenefitPayee;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitPayee";
  }

  public toJSON(): IExplanationOfBenefitPayee {
    const result: IExplanationOfBenefitPayee = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.party) {
      result.party = this.party.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ExplanationOfBenefitPayee";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
