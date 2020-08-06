/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IRiskEvidenceSynthesisRiskEstimate,
  PrimitiveDecimal,
  PrimitiveInteger,
  PrimitiveString,
  RiskEvidenceSynthesisRiskEstimatePrecisionEstimate,
} from "../internal";

export class RiskEvidenceSynthesisRiskEstimate extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RiskEvidenceSynthesis.RiskEstimate";

  public description?: PrimitiveString;

  public type?: CodeableConcept;

  public value?: PrimitiveDecimal;

  public unitOfMeasure?: CodeableConcept;

  public denominatorCount?: PrimitiveInteger;

  public numeratorCount?: PrimitiveInteger;

  public precisionEstimate?: Array<RiskEvidenceSynthesisRiskEstimatePrecisionEstimate>;

  public static parse(
    json: IRiskEvidenceSynthesisRiskEstimate,
    providedInstance: RiskEvidenceSynthesisRiskEstimate = new RiskEvidenceSynthesisRiskEstimate()
  ): RiskEvidenceSynthesisRiskEstimate {
    const newInstance: RiskEvidenceSynthesisRiskEstimate = BackboneElement.parse(json, providedInstance);
  
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.value) {
      newInstance.value = PrimitiveDecimal.parsePrimitive(json.value, json._value);
    }
    if (json.unitOfMeasure) {
      newInstance.unitOfMeasure = CodeableConcept.parse(json.unitOfMeasure);
    }
    if (json.denominatorCount) {
      newInstance.denominatorCount = PrimitiveInteger.parsePrimitive(json.denominatorCount, json._denominatorCount);
    }
    if (json.numeratorCount) {
      newInstance.numeratorCount = PrimitiveInteger.parsePrimitive(json.numeratorCount, json._numeratorCount);
    }
    if (json.precisionEstimate) {
      newInstance.precisionEstimate = json.precisionEstimate.map((x) => RiskEvidenceSynthesisRiskEstimatePrecisionEstimate.parse(x));
    }
    return newInstance;
  }

  public static isRiskEvidenceSynthesisRiskEstimate(input?: unknown): input is RiskEvidenceSynthesisRiskEstimate {
    const castInput = input as RiskEvidenceSynthesisRiskEstimate;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RiskEvidenceSynthesisRiskEstimate";
  }

  public toJSON(): IRiskEvidenceSynthesisRiskEstimate {
    const result: IRiskEvidenceSynthesisRiskEstimate = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.unitOfMeasure) {
      result.unitOfMeasure = this.unitOfMeasure.toJSON();
    }

    if (this.denominatorCount) {
      result.denominatorCount = this.denominatorCount.value;
      result._denominatorCount = Extension.serializePrimitiveExtension(this.denominatorCount);
    }

    if (this.numeratorCount) {
      result.numeratorCount = this.numeratorCount.value;
      result._numeratorCount = Extension.serializePrimitiveExtension(this.numeratorCount);
    }

    if (this.precisionEstimate) {
      result.precisionEstimate = this.precisionEstimate.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "RiskEvidenceSynthesisRiskEstimate";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
