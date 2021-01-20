/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate,
  PrimitiveDecimal,
  FhirType
} from "../internal";

@FhirType("RiskEvidenceSynthesisRiskEstimatePrecisionEstimate", "BackboneElement")
export class RiskEvidenceSynthesisRiskEstimatePrecisionEstimate extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RiskEvidenceSynthesis.RiskEstimate.PrecisionEstimate";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("PrimitiveDecimal")
  public level?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public from?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public to?: PrimitiveDecimal;

  public static parse(
    json: IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate,
    providedInstance: RiskEvidenceSynthesisRiskEstimatePrecisionEstimate = new RiskEvidenceSynthesisRiskEstimatePrecisionEstimate()
  ): RiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
    const newInstance: RiskEvidenceSynthesisRiskEstimatePrecisionEstimate = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.level !== undefined) {
      newInstance.level = PrimitiveDecimal.parsePrimitive(json.level, json._level);
    }
    if (json.from !== undefined) {
      newInstance.from = PrimitiveDecimal.parsePrimitive(json.from, json._from);
    }
    if (json.to !== undefined) {
      newInstance.to = PrimitiveDecimal.parsePrimitive(json.to, json._to);
    }
    return newInstance;
  }

  public static isRiskEvidenceSynthesisRiskEstimatePrecisionEstimate(input?: unknown): input is RiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
    const castInput = input as RiskEvidenceSynthesisRiskEstimatePrecisionEstimate;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RiskEvidenceSynthesisRiskEstimatePrecisionEstimate";
  }

  public toJSON(): IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
    const result: IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.level) {
      result.level = this.level.value;
      result._level = Extension.serializePrimitiveExtension(this.level);
    }

    if (this.from) {
      result.from = this.from.value;
      result._from = Extension.serializePrimitiveExtension(this.from);
    }

    if (this.to) {
      result.to = this.to.value;
      result._to = Extension.serializePrimitiveExtension(this.to);
    }

    return result;
  }

  public clone(): RiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
    return RiskEvidenceSynthesisRiskEstimatePrecisionEstimate.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "RiskEvidenceSynthesisRiskEstimatePrecisionEstimate";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
