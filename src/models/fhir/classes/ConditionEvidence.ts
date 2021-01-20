/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirList,
  IConditionEvidence,
  Reference,
  FhirType
} from "../internal";

@FhirType("ConditionEvidence", "BackboneElement")
export class ConditionEvidence extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Condition.Evidence";

  static readonly primaryCodePath: string | null = null;

  @FhirList("CodeableConcept")
  public code?: Array<CodeableConcept>;

  @FhirList("Reference")
  public detail?: Array<Reference>;

  public static parse(
    json: IConditionEvidence,
    providedInstance: ConditionEvidence = new ConditionEvidence()
  ): ConditionEvidence {
    const newInstance: ConditionEvidence = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = json.code.map((x) => CodeableConcept.parse(x));
    }
    if (json.detail !== undefined) {
      newInstance.detail = json.detail.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isConditionEvidence(input?: unknown): input is ConditionEvidence {
    const castInput = input as ConditionEvidence;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConditionEvidence";
  }

  public toJSON(): IConditionEvidence {
    const result: IConditionEvidence = super.toJSON();

    if (this.code) {
      result.code = this.code.map((x) => x.toJSON());
    }

    if (this.detail) {
      result.detail = this.detail.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ConditionEvidence {
    return ConditionEvidence.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ConditionEvidence";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
