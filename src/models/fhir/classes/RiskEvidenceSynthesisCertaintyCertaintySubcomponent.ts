/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  BackboneElement,
  CodeableConcept,
  IRiskEvidenceSynthesisCertaintyCertaintySubcomponent,
  FieldMetadata
} from "../internal";

export class RiskEvidenceSynthesisCertaintyCertaintySubcomponent extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RiskEvidenceSynthesis.Certainty.CertaintySubcomponent";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "rating",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "note",
      fieldType: [Annotation],
      isArray: true
    }];
  }

  public type?: CodeableConcept;

  public rating?: Array<CodeableConcept>;

  public note?: Array<Annotation>;

  public static parse(
    json: IRiskEvidenceSynthesisCertaintyCertaintySubcomponent,
    providedInstance: RiskEvidenceSynthesisCertaintyCertaintySubcomponent = new RiskEvidenceSynthesisCertaintyCertaintySubcomponent()
  ): RiskEvidenceSynthesisCertaintyCertaintySubcomponent {
    const newInstance: RiskEvidenceSynthesisCertaintyCertaintySubcomponent = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.rating !== undefined) {
      newInstance.rating = json.rating.map((x) => CodeableConcept.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isRiskEvidenceSynthesisCertaintyCertaintySubcomponent(input?: unknown): input is RiskEvidenceSynthesisCertaintyCertaintySubcomponent {
    const castInput = input as RiskEvidenceSynthesisCertaintyCertaintySubcomponent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RiskEvidenceSynthesisCertaintyCertaintySubcomponent";
  }

  public toJSON(): IRiskEvidenceSynthesisCertaintyCertaintySubcomponent {
    const result: IRiskEvidenceSynthesisCertaintyCertaintySubcomponent = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.rating) {
      result.rating = this.rating.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): RiskEvidenceSynthesisCertaintyCertaintySubcomponent {
    return RiskEvidenceSynthesisCertaintyCertaintySubcomponent.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "RiskEvidenceSynthesisCertaintyCertaintySubcomponent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
