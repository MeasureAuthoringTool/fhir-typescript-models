/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirList,
  IDetectedIssueEvidence,
  Reference,
  FhirType
} from "../internal";

@FhirType("DetectedIssueEvidence", "BackboneElement")
export class DetectedIssueEvidence extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DetectedIssue.Evidence";

  static readonly primaryCodePath: string | null = null;

  @FhirList("CodeableConcept")
  public code?: Array<CodeableConcept>;

  @FhirList("Reference")
  public detail?: Array<Reference>;

  public static parse(
    json: IDetectedIssueEvidence,
    providedInstance: DetectedIssueEvidence = new DetectedIssueEvidence()
  ): DetectedIssueEvidence {
    const newInstance: DetectedIssueEvidence = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = json.code.map((x) => CodeableConcept.parse(x));
    }
    if (json.detail !== undefined) {
      newInstance.detail = json.detail.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isDetectedIssueEvidence(input?: unknown): input is DetectedIssueEvidence {
    const castInput = input as DetectedIssueEvidence;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DetectedIssueEvidence";
  }

  public toJSON(): IDetectedIssueEvidence {
    const result: IDetectedIssueEvidence = super.toJSON();

    if (this.code) {
      result.code = this.code.map((x) => x.toJSON());
    }

    if (this.detail) {
      result.detail = this.detail.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): DetectedIssueEvidence {
    return DetectedIssueEvidence.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DetectedIssueEvidence";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
