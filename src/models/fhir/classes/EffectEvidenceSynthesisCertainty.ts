/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  BackboneElement,
  CodeableConcept,
  EffectEvidenceSynthesisCertaintyCertaintySubcomponent,
  IEffectEvidenceSynthesisCertainty,
  FieldMetadata
} from "../internal";

export class EffectEvidenceSynthesisCertainty extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EffectEvidenceSynthesis.Certainty";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "rating",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "note",
      fieldType: [Annotation],
      isArray: true
    }, {
      fieldName: "certaintySubcomponent",
      fieldType: [EffectEvidenceSynthesisCertaintyCertaintySubcomponent],
      isArray: true
    }];
  }

  public rating?: Array<CodeableConcept>;

  public note?: Array<Annotation>;

  public certaintySubcomponent?: Array<EffectEvidenceSynthesisCertaintyCertaintySubcomponent>;

  public static parse(
    json: IEffectEvidenceSynthesisCertainty,
    providedInstance: EffectEvidenceSynthesisCertainty = new EffectEvidenceSynthesisCertainty()
  ): EffectEvidenceSynthesisCertainty {
    const newInstance: EffectEvidenceSynthesisCertainty = BackboneElement.parse(json, providedInstance);
  
    if (json.rating !== undefined) {
      newInstance.rating = json.rating.map((x) => CodeableConcept.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.certaintySubcomponent !== undefined) {
      newInstance.certaintySubcomponent = json.certaintySubcomponent.map((x) => EffectEvidenceSynthesisCertaintyCertaintySubcomponent.parse(x));
    }
    return newInstance;
  }

  public static isEffectEvidenceSynthesisCertainty(input?: unknown): input is EffectEvidenceSynthesisCertainty {
    const castInput = input as EffectEvidenceSynthesisCertainty;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EffectEvidenceSynthesisCertainty";
  }

  public toJSON(): IEffectEvidenceSynthesisCertainty {
    const result: IEffectEvidenceSynthesisCertainty = super.toJSON();

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

  public clone(): EffectEvidenceSynthesisCertainty {
    return EffectEvidenceSynthesisCertainty.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EffectEvidenceSynthesisCertainty";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
