/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IClaimDiagnosis,
  PrimitivePositiveInt,
  Reference,
  FhirType
} from "../internal";

@FhirType("ClaimDiagnosis", "BackboneElement")
export class ClaimDiagnosis extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Claim.Diagnosis";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitivePositiveInt")
  public sequence?: PrimitivePositiveInt;

  @FhirChoice("CodeableConcept", "Reference")
  public diagnosis?: CodeableConcept | Reference;

  @FhirList("CodeableConcept")
  public type?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public onAdmission?: CodeableConcept;

  @FhirField("CodeableConcept")
  public packageCode?: CodeableConcept;

  public static parse(
    json: IClaimDiagnosis,
    providedInstance: ClaimDiagnosis = new ClaimDiagnosis()
  ): ClaimDiagnosis {
    const newInstance: ClaimDiagnosis = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence !== undefined) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.diagnosisCodeableConcept !== undefined) {
      newInstance.diagnosis = CodeableConcept.parse(json.diagnosisCodeableConcept);
    }
    if (json.diagnosisReference !== undefined) {
      newInstance.diagnosis = Reference.parse(json.diagnosisReference);
    }
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.onAdmission !== undefined) {
      newInstance.onAdmission = CodeableConcept.parse(json.onAdmission);
    }
    if (json.packageCode !== undefined) {
      newInstance.packageCode = CodeableConcept.parse(json.packageCode);
    }
    return newInstance;
  }

  public static isClaimDiagnosis(input?: unknown): input is ClaimDiagnosis {
    const castInput = input as ClaimDiagnosis;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimDiagnosis";
  }

  public toJSON(): IClaimDiagnosis {
    const result: IClaimDiagnosis = super.toJSON();

    if (this.sequence) {
      result.sequence = this.sequence.value;
      result._sequence = Extension.serializePrimitiveExtension(this.sequence);
    }

    if (this.diagnosis && CodeableConcept.isCodeableConcept(this.diagnosis)) {
      result.diagnosisCodeableConcept = this.diagnosis.toJSON();
    }

    if (this.diagnosis && Reference.isReference(this.diagnosis)) {
      result.diagnosisReference = this.diagnosis.toJSON();
    }

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.onAdmission) {
      result.onAdmission = this.onAdmission.toJSON();
    }

    if (this.packageCode) {
      result.packageCode = this.packageCode.toJSON();
    }

    return result;
  }

  public clone(): ClaimDiagnosis {
    return ClaimDiagnosis.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimDiagnosis";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
