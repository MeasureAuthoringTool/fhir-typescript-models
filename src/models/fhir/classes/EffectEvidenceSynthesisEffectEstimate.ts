/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  EffectEvidenceSynthesisEffectEstimatePrecisionEstimate,
  Extension,
  IEffectEvidenceSynthesisEffectEstimate,
  PrimitiveDecimal,
  PrimitiveString,
} from "../internal";

export class EffectEvidenceSynthesisEffectEstimate extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EffectEvidenceSynthesis.EffectEstimate";

  public description?: PrimitiveString;

  public type?: CodeableConcept;

  public variantState?: CodeableConcept;

  public value?: PrimitiveDecimal;

  public unitOfMeasure?: CodeableConcept;

  public precisionEstimate?: Array<EffectEvidenceSynthesisEffectEstimatePrecisionEstimate>;

  public static parse(
    json: IEffectEvidenceSynthesisEffectEstimate,
    providedInstance: EffectEvidenceSynthesisEffectEstimate = new EffectEvidenceSynthesisEffectEstimate()
  ): EffectEvidenceSynthesisEffectEstimate {
    const newInstance: EffectEvidenceSynthesisEffectEstimate = BackboneElement.parse(json, providedInstance);
  
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.variantState !== undefined) {
      newInstance.variantState = CodeableConcept.parse(json.variantState);
    }
    if (json.value !== undefined) {
      newInstance.value = PrimitiveDecimal.parsePrimitive(json.value, json._value);
    }
    if (json.unitOfMeasure !== undefined) {
      newInstance.unitOfMeasure = CodeableConcept.parse(json.unitOfMeasure);
    }
    if (json.precisionEstimate !== undefined) {
      newInstance.precisionEstimate = json.precisionEstimate.map((x) => EffectEvidenceSynthesisEffectEstimatePrecisionEstimate.parse(x));
    }
    return newInstance;
  }

  public static isEffectEvidenceSynthesisEffectEstimate(input?: unknown): input is EffectEvidenceSynthesisEffectEstimate {
    const castInput = input as EffectEvidenceSynthesisEffectEstimate;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EffectEvidenceSynthesisEffectEstimate";
  }

  public toJSON(): IEffectEvidenceSynthesisEffectEstimate {
    const result: IEffectEvidenceSynthesisEffectEstimate = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.variantState) {
      result.variantState = this.variantState.toJSON();
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.unitOfMeasure) {
      result.unitOfMeasure = this.unitOfMeasure.toJSON();
    }

    if (this.precisionEstimate) {
      result.precisionEstimate = this.precisionEstimate.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): EffectEvidenceSynthesisEffectEstimate {
    return EffectEvidenceSynthesisEffectEstimate.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EffectEvidenceSynthesisEffectEstimate";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
