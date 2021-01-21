/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  BackboneElement,
  CodeableConcept,
  FhirList,
  IRiskEvidenceSynthesisCertainty,
  RiskEvidenceSynthesisCertaintyCertaintySubcomponent,
  FhirType
} from "../internal";

@FhirType("RiskEvidenceSynthesisCertainty", "BackboneElement")
export class RiskEvidenceSynthesisCertainty extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RiskEvidenceSynthesis.Certainty";

  static readonly primaryCodePath: string | null = null;

  @FhirList("CodeableConcept")
  public rating?: Array<CodeableConcept>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  @FhirList("RiskEvidenceSynthesisCertaintyCertaintySubcomponent")
  public certaintySubcomponent?: Array<RiskEvidenceSynthesisCertaintyCertaintySubcomponent>;

  public static parse(
    json: IRiskEvidenceSynthesisCertainty,
    providedInstance: RiskEvidenceSynthesisCertainty = new RiskEvidenceSynthesisCertainty()
  ): RiskEvidenceSynthesisCertainty {
    const newInstance: RiskEvidenceSynthesisCertainty = BackboneElement.parse(json, providedInstance);
  
    if (json.rating !== undefined) {
      newInstance.rating = json.rating.map((x) => CodeableConcept.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.certaintySubcomponent !== undefined) {
      newInstance.certaintySubcomponent = json.certaintySubcomponent.map((x) => RiskEvidenceSynthesisCertaintyCertaintySubcomponent.parse(x));
    }
    return newInstance;
  }

  public static isRiskEvidenceSynthesisCertainty(input?: unknown): input is RiskEvidenceSynthesisCertainty {
    const castInput = input as RiskEvidenceSynthesisCertainty;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RiskEvidenceSynthesisCertainty";
  }

  public toJSON(): IRiskEvidenceSynthesisCertainty {
    const result: IRiskEvidenceSynthesisCertainty = super.toJSON();

    if (this.rating) {
      result.rating = this.rating.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.certaintySubcomponent) {
      result.certaintySubcomponent = this.certaintySubcomponent.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): RiskEvidenceSynthesisCertainty {
    return RiskEvidenceSynthesisCertainty.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "RiskEvidenceSynthesisCertainty";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
