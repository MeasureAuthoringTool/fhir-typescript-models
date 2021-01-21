/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirChoice,
  ICoverageEligibilityRequestItemDiagnosis,
  Reference,
  FhirType
} from "../internal";

@FhirType("CoverageEligibilityRequestItemDiagnosis", "BackboneElement")
export class CoverageEligibilityRequestItemDiagnosis extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CoverageEligibilityRequest.Item.Diagnosis";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("CodeableConcept", "Reference")
  public diagnosis?: CodeableConcept | Reference;

  public static parse(
    json: ICoverageEligibilityRequestItemDiagnosis,
    providedInstance: CoverageEligibilityRequestItemDiagnosis = new CoverageEligibilityRequestItemDiagnosis()
  ): CoverageEligibilityRequestItemDiagnosis {
    const newInstance: CoverageEligibilityRequestItemDiagnosis = BackboneElement.parse(json, providedInstance);
  
    if (json.diagnosisCodeableConcept !== undefined) {
      newInstance.diagnosis = CodeableConcept.parse(json.diagnosisCodeableConcept);
    }
    if (json.diagnosisReference !== undefined) {
      newInstance.diagnosis = Reference.parse(json.diagnosisReference);
    }
    return newInstance;
  }

  public static isCoverageEligibilityRequestItemDiagnosis(input?: unknown): input is CoverageEligibilityRequestItemDiagnosis {
    const castInput = input as CoverageEligibilityRequestItemDiagnosis;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CoverageEligibilityRequestItemDiagnosis";
  }

  public toJSON(): ICoverageEligibilityRequestItemDiagnosis {
    const result: ICoverageEligibilityRequestItemDiagnosis = super.toJSON();

    if (this.diagnosis && CodeableConcept.isCodeableConcept(this.diagnosis)) {
      result.diagnosisCodeableConcept = this.diagnosis.toJSON();
    }

    if (this.diagnosis && Reference.isReference(this.diagnosis)) {
      result.diagnosisReference = this.diagnosis.toJSON();
    }

    return result;
  }

  public clone(): CoverageEligibilityRequestItemDiagnosis {
    return CoverageEligibilityRequestItemDiagnosis.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CoverageEligibilityRequestItemDiagnosis";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
