/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  ExposureState,
  Extension,
  IEffectEvidenceSynthesisResultsByExposure,
  PrimitiveString,
  Reference,
} from "../internal";

export class EffectEvidenceSynthesisResultsByExposure extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EffectEvidenceSynthesis.ResultsByExposure";

  public description?: PrimitiveString;

  public exposureState?: ExposureState;

  public variantState?: CodeableConcept;

  public riskEvidenceSynthesis?: Reference;

  public static parse(
    json: IEffectEvidenceSynthesisResultsByExposure,
    providedInstance: EffectEvidenceSynthesisResultsByExposure = new EffectEvidenceSynthesisResultsByExposure()
  ): EffectEvidenceSynthesisResultsByExposure {
    const newInstance: EffectEvidenceSynthesisResultsByExposure = BackboneElement.parse(json, providedInstance);
  
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.exposureState) {
      newInstance.exposureState = ExposureState.parsePrimitive(json.exposureState, json._exposureState);
    }
    if (json.variantState) {
      newInstance.variantState = CodeableConcept.parse(json.variantState);
    }
    if (json.riskEvidenceSynthesis) {
      newInstance.riskEvidenceSynthesis = Reference.parse(json.riskEvidenceSynthesis);
    }
    return newInstance;
  }

  public static isEffectEvidenceSynthesisResultsByExposure(input?: unknown): input is EffectEvidenceSynthesisResultsByExposure {
    const castInput = input as EffectEvidenceSynthesisResultsByExposure;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EffectEvidenceSynthesisResultsByExposure";
  }

  public toJSON(): IEffectEvidenceSynthesisResultsByExposure {
    const result: IEffectEvidenceSynthesisResultsByExposure = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.exposureState) {
      result.exposureState = this.exposureState.value;
      result._exposureState = Extension.serializePrimitiveExtension(this.exposureState);
    }

    if (this.variantState) {
      result.variantState = this.variantState.toJSON();
    }

    if (this.riskEvidenceSynthesis) {
      result.riskEvidenceSynthesis = this.riskEvidenceSynthesis.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "EffectEvidenceSynthesisResultsByExposure";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
