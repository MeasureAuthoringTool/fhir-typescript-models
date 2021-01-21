/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  ExposureState,
  Extension,
  FhirField,
  IEffectEvidenceSynthesisResultsByExposure,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("EffectEvidenceSynthesisResultsByExposure", "BackboneElement")
export class EffectEvidenceSynthesisResultsByExposure extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EffectEvidenceSynthesis.ResultsByExposure";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("ExposureState")
  public exposureState?: ExposureState;

  @FhirField("CodeableConcept")
  public variantState?: CodeableConcept;

  @FhirField("Reference")
  public riskEvidenceSynthesis?: Reference;

  public static parse(
    json: IEffectEvidenceSynthesisResultsByExposure,
    providedInstance: EffectEvidenceSynthesisResultsByExposure = new EffectEvidenceSynthesisResultsByExposure()
  ): EffectEvidenceSynthesisResultsByExposure {
    const newInstance: EffectEvidenceSynthesisResultsByExposure = BackboneElement.parse(json, providedInstance);
  
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.exposureState !== undefined) {
      newInstance.exposureState = ExposureState.parsePrimitive(json.exposureState, json._exposureState);
    }
    if (json.variantState !== undefined) {
      newInstance.variantState = CodeableConcept.parse(json.variantState);
    }
    if (json.riskEvidenceSynthesis !== undefined) {
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

  public clone(): EffectEvidenceSynthesisResultsByExposure {
    return EffectEvidenceSynthesisResultsByExposure.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EffectEvidenceSynthesisResultsByExposure";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
