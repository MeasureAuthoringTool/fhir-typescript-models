/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  ICoverageEligibilityResponseError,
} from "../internal";

export class CoverageEligibilityResponseError extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CoverageEligibilityResponse.Error";

  public code?: CodeableConcept;

  public static parse(
    json: ICoverageEligibilityResponseError,
    providedInstance: CoverageEligibilityResponseError = new CoverageEligibilityResponseError()
  ): CoverageEligibilityResponseError {
    const newInstance: CoverageEligibilityResponseError = BackboneElement.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    return newInstance;
  }

  public static isCoverageEligibilityResponseError(input?: unknown): input is CoverageEligibilityResponseError {
    const castInput = input as CoverageEligibilityResponseError;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CoverageEligibilityResponseError";
  }

  public toJSON(): ICoverageEligibilityResponseError {
    const result: ICoverageEligibilityResponseError = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "CoverageEligibilityResponseError";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
