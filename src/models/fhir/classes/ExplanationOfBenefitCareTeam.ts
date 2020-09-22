/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IExplanationOfBenefitCareTeam,
  PrimitiveBoolean,
  PrimitivePositiveInt,
  Reference,
} from "../internal";

export class ExplanationOfBenefitCareTeam extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.CareTeam";
  
  static readonly primaryCodePath: string | null = null;

  public sequence?: PrimitivePositiveInt;

  public provider?: Reference;

  public responsible?: PrimitiveBoolean;

  public role?: CodeableConcept;

  public qualification?: CodeableConcept;

  public static parse(
    json: IExplanationOfBenefitCareTeam,
    providedInstance: ExplanationOfBenefitCareTeam = new ExplanationOfBenefitCareTeam()
  ): ExplanationOfBenefitCareTeam {
    const newInstance: ExplanationOfBenefitCareTeam = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence !== undefined) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.provider !== undefined) {
      newInstance.provider = Reference.parse(json.provider);
    }
    if (json.responsible !== undefined) {
      newInstance.responsible = PrimitiveBoolean.parsePrimitive(json.responsible, json._responsible);
    }
    if (json.role !== undefined) {
      newInstance.role = CodeableConcept.parse(json.role);
    }
    if (json.qualification !== undefined) {
      newInstance.qualification = CodeableConcept.parse(json.qualification);
    }
    return newInstance;
  }

  public static isExplanationOfBenefitCareTeam(input?: unknown): input is ExplanationOfBenefitCareTeam {
    const castInput = input as ExplanationOfBenefitCareTeam;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitCareTeam";
  }

  public toJSON(): IExplanationOfBenefitCareTeam {
    const result: IExplanationOfBenefitCareTeam = super.toJSON();

    if (this.sequence) {
      result.sequence = this.sequence.value;
      result._sequence = Extension.serializePrimitiveExtension(this.sequence);
    }

    if (this.provider) {
      result.provider = this.provider.toJSON();
    }

    if (this.responsible) {
      result.responsible = this.responsible.value;
      result._responsible = Extension.serializePrimitiveExtension(this.responsible);
    }

    if (this.role) {
      result.role = this.role.toJSON();
    }

    if (this.qualification) {
      result.qualification = this.qualification.toJSON();
    }

    return result;
  }

  public clone(): ExplanationOfBenefitCareTeam {
    return ExplanationOfBenefitCareTeam.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitCareTeam";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
