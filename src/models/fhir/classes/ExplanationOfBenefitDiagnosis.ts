/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IExplanationOfBenefitDiagnosis,
  PrimitivePositiveInt,
  Reference,
  FhirType
} from "../internal";

@FhirType("ExplanationOfBenefitDiagnosis", "BackboneElement")
export class ExplanationOfBenefitDiagnosis extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Diagnosis";

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
    json: IExplanationOfBenefitDiagnosis,
    providedInstance: ExplanationOfBenefitDiagnosis = new ExplanationOfBenefitDiagnosis()
  ): ExplanationOfBenefitDiagnosis {
    const newInstance: ExplanationOfBenefitDiagnosis = BackboneElement.parse(json, providedInstance);
  
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

  public static isExplanationOfBenefitDiagnosis(input?: unknown): input is ExplanationOfBenefitDiagnosis {
    const castInput = input as ExplanationOfBenefitDiagnosis;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitDiagnosis";
  }

  public toJSON(): IExplanationOfBenefitDiagnosis {
    const result: IExplanationOfBenefitDiagnosis = super.toJSON();

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

  public clone(): ExplanationOfBenefitDiagnosis {
    return ExplanationOfBenefitDiagnosis.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitDiagnosis";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
