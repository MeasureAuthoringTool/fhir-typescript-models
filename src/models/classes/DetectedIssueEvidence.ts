/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IDetectedIssueEvidence,
  Reference,
} from "../internal";

export class DetectedIssueEvidence extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DetectedIssue.Evidence";

  public code?: Array<CodeableConcept>;

  public detail?: Array<Reference>;

  public static parse(
    json: IDetectedIssueEvidence,
    providedInstance: DetectedIssueEvidence = new DetectedIssueEvidence()
  ): DetectedIssueEvidence {
    const newInstance: DetectedIssueEvidence = BackboneElement.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = json.code.map((x) => CodeableConcept.parse(x));
    }
    if (json.detail) {
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
  
  public getTypeName(): string {
    return "DetectedIssueEvidence";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
