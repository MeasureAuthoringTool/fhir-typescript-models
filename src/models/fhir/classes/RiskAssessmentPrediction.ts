/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  IRiskAssessmentPrediction,
  Period,
  PrimitiveDecimal,
  PrimitiveString,
  Range,
  FhirType
} from "../internal";

@FhirType("RiskAssessmentPrediction", "BackboneElement")
export class RiskAssessmentPrediction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RiskAssessment.Prediction";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public outcome?: CodeableConcept;

  @FhirChoice("PrimitiveDecimal", "Range")
  public probability?: PrimitiveDecimal | Range;

  @FhirField("CodeableConcept")
  public qualitativeRisk?: CodeableConcept;

  @FhirField("PrimitiveDecimal")
  public relativeRisk?: PrimitiveDecimal;

  @FhirChoice("Period", "Range")
  public when?: Period | Range;

  @FhirField("PrimitiveString")
  public rationale?: PrimitiveString;

  public static parse(
    json: IRiskAssessmentPrediction,
    providedInstance: RiskAssessmentPrediction = new RiskAssessmentPrediction()
  ): RiskAssessmentPrediction {
    const newInstance: RiskAssessmentPrediction = BackboneElement.parse(json, providedInstance);
  
    if (json.outcome !== undefined) {
      newInstance.outcome = CodeableConcept.parse(json.outcome);
    }
    if (json.probabilityDecimal !== undefined) {
      newInstance.probability = PrimitiveDecimal.parsePrimitive(json.probabilityDecimal, json._probabilityDecimal);
    }
    if (json.probabilityRange !== undefined) {
      newInstance.probability = Range.parse(json.probabilityRange);
    }
    if (json.qualitativeRisk !== undefined) {
      newInstance.qualitativeRisk = CodeableConcept.parse(json.qualitativeRisk);
    }
    if (json.relativeRisk !== undefined) {
      newInstance.relativeRisk = PrimitiveDecimal.parsePrimitive(json.relativeRisk, json._relativeRisk);
    }
    if (json.whenPeriod !== undefined) {
      newInstance.when = Period.parse(json.whenPeriod);
    }
    if (json.whenRange !== undefined) {
      newInstance.when = Range.parse(json.whenRange);
    }
    if (json.rationale !== undefined) {
      newInstance.rationale = PrimitiveString.parsePrimitive(json.rationale, json._rationale);
    }
    return newInstance;
  }

  public static isRiskAssessmentPrediction(input?: unknown): input is RiskAssessmentPrediction {
    const castInput = input as RiskAssessmentPrediction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RiskAssessmentPrediction";
  }

  public toJSON(): IRiskAssessmentPrediction {
    const result: IRiskAssessmentPrediction = super.toJSON();

    if (this.outcome) {
      result.outcome = this.outcome.toJSON();
    }

    if (this.probability && PrimitiveDecimal.isPrimitiveDecimal(this.probability)) {
      result.probabilityDecimal = this.probability.value;
      result._probabilityDecimal = Extension.serializePrimitiveExtension(this.probability);
    }

    if (this.probability && Range.isRange(this.probability)) {
      result.probabilityRange = this.probability.toJSON();
    }

    if (this.qualitativeRisk) {
      result.qualitativeRisk = this.qualitativeRisk.toJSON();
    }

    if (this.relativeRisk) {
      result.relativeRisk = this.relativeRisk.value;
      result._relativeRisk = Extension.serializePrimitiveExtension(this.relativeRisk);
    }

    if (this.when && Period.isPeriod(this.when)) {
      result.whenPeriod = this.when.toJSON();
    }

    if (this.when && Range.isRange(this.when)) {
      result.whenRange = this.when.toJSON();
    }

    if (this.rationale) {
      result.rationale = this.rationale.value;
      result._rationale = Extension.serializePrimitiveExtension(this.rationale);
    }

    return result;
  }

  public clone(): RiskAssessmentPrediction {
    return RiskAssessmentPrediction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "RiskAssessmentPrediction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
