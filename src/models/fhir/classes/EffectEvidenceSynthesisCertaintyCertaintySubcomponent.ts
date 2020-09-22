/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  BackboneElement,
  CodeableConcept,
  IEffectEvidenceSynthesisCertaintyCertaintySubcomponent,
} from "../internal";

export class EffectEvidenceSynthesisCertaintyCertaintySubcomponent extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EffectEvidenceSynthesis.Certainty.CertaintySubcomponent";
  
  static readonly primaryCodePath: string | null = null;

  public type?: CodeableConcept;

  public rating?: Array<CodeableConcept>;

  public note?: Array<Annotation>;

  public static parse(
    json: IEffectEvidenceSynthesisCertaintyCertaintySubcomponent,
    providedInstance: EffectEvidenceSynthesisCertaintyCertaintySubcomponent = new EffectEvidenceSynthesisCertaintyCertaintySubcomponent()
  ): EffectEvidenceSynthesisCertaintyCertaintySubcomponent {
    const newInstance: EffectEvidenceSynthesisCertaintyCertaintySubcomponent = BackboneElement.parse(json, providedInstance);
  
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

  public static isEffectEvidenceSynthesisCertaintyCertaintySubcomponent(input?: unknown): input is EffectEvidenceSynthesisCertaintyCertaintySubcomponent {
    const castInput = input as EffectEvidenceSynthesisCertaintyCertaintySubcomponent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EffectEvidenceSynthesisCertaintyCertaintySubcomponent";
  }

  public toJSON(): IEffectEvidenceSynthesisCertaintyCertaintySubcomponent {
    const result: IEffectEvidenceSynthesisCertaintyCertaintySubcomponent = super.toJSON();

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

  public clone(): EffectEvidenceSynthesisCertaintyCertaintySubcomponent {
    return EffectEvidenceSynthesisCertaintyCertaintySubcomponent.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EffectEvidenceSynthesisCertaintyCertaintySubcomponent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
