/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IExplanationOfBenefitPayee,
  Reference,
  FieldMetadata
} from "../internal";

export class ExplanationOfBenefitPayee extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Payee";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "party",
      fieldType: [Reference],
      isArray: false
    }];
  }

  public type?: CodeableConcept;

  public party?: Reference;

  public static parse(
    json: IExplanationOfBenefitPayee,
    providedInstance: ExplanationOfBenefitPayee = new ExplanationOfBenefitPayee()
  ): ExplanationOfBenefitPayee {
    const newInstance: ExplanationOfBenefitPayee = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.party !== undefined) {
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

  public clone(): ExplanationOfBenefitPayee {
    return ExplanationOfBenefitPayee.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitPayee";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
