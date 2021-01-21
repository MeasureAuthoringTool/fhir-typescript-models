/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IEffectEvidenceSynthesisSampleSize,
  PrimitiveInteger,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("EffectEvidenceSynthesisSampleSize", "BackboneElement")
export class EffectEvidenceSynthesisSampleSize extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EffectEvidenceSynthesis.SampleSize";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("PrimitiveInteger")
  public numberOfStudies?: PrimitiveInteger;

  @FhirField("PrimitiveInteger")
  public numberOfParticipants?: PrimitiveInteger;

  public static parse(
    json: IEffectEvidenceSynthesisSampleSize,
    providedInstance: EffectEvidenceSynthesisSampleSize = new EffectEvidenceSynthesisSampleSize()
  ): EffectEvidenceSynthesisSampleSize {
    const newInstance: EffectEvidenceSynthesisSampleSize = BackboneElement.parse(json, providedInstance);
  
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.numberOfStudies !== undefined) {
      newInstance.numberOfStudies = PrimitiveInteger.parsePrimitive(json.numberOfStudies, json._numberOfStudies);
    }
    if (json.numberOfParticipants !== undefined) {
      newInstance.numberOfParticipants = PrimitiveInteger.parsePrimitive(json.numberOfParticipants, json._numberOfParticipants);
    }
    return newInstance;
  }

  public static isEffectEvidenceSynthesisSampleSize(input?: unknown): input is EffectEvidenceSynthesisSampleSize {
    const castInput = input as EffectEvidenceSynthesisSampleSize;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EffectEvidenceSynthesisSampleSize";
  }

  public toJSON(): IEffectEvidenceSynthesisSampleSize {
    const result: IEffectEvidenceSynthesisSampleSize = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.numberOfStudies) {
      result.numberOfStudies = this.numberOfStudies.value;
      result._numberOfStudies = Extension.serializePrimitiveExtension(this.numberOfStudies);
    }

    if (this.numberOfParticipants) {
      result.numberOfParticipants = this.numberOfParticipants.value;
      result._numberOfParticipants = Extension.serializePrimitiveExtension(this.numberOfParticipants);
    }

    return result;
  }

  public clone(): EffectEvidenceSynthesisSampleSize {
    return EffectEvidenceSynthesisSampleSize.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EffectEvidenceSynthesisSampleSize";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
