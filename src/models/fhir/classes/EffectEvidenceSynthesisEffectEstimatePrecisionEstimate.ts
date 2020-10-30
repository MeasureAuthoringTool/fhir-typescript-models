/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate,
  PrimitiveDecimal,
  FieldMetadata
} from "../internal";

export class EffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "level",
      fieldType: [PrimitiveDecimal],
      isArray: false
    }, {
      fieldName: "from",
      fieldType: [PrimitiveDecimal],
      isArray: false
    }, {
      fieldName: "to",
      fieldType: [PrimitiveDecimal],
      isArray: false
    }];
  }

  public type?: CodeableConcept;

  public level?: PrimitiveDecimal;

  public from?: PrimitiveDecimal;

  public to?: PrimitiveDecimal;

  public static parse(
    json: IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate,
    providedInstance: EffectEvidenceSynthesisEffectEstimatePrecisionEstimate = new EffectEvidenceSynthesisEffectEstimatePrecisionEstimate()
  ): EffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
    const newInstance: EffectEvidenceSynthesisEffectEstimatePrecisionEstimate = BackboneElement.parse(json, providedInstance);
  
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

  public static isEffectEvidenceSynthesisEffectEstimatePrecisionEstimate(input?: unknown): input is EffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
    const castInput = input as EffectEvidenceSynthesisEffectEstimatePrecisionEstimate;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EffectEvidenceSynthesisEffectEstimatePrecisionEstimate";
  }

  public toJSON(): IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
    const result: IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate = super.toJSON();

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

  public clone(): EffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
    return EffectEvidenceSynthesisEffectEstimatePrecisionEstimate.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EffectEvidenceSynthesisEffectEstimatePrecisionEstimate";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
