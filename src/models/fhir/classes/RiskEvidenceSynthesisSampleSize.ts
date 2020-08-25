/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IRiskEvidenceSynthesisSampleSize,
  PrimitiveInteger,
  PrimitiveString,
} from "../internal";

export class RiskEvidenceSynthesisSampleSize extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RiskEvidenceSynthesis.SampleSize";

  public description?: PrimitiveString;

  public numberOfStudies?: PrimitiveInteger;

  public numberOfParticipants?: PrimitiveInteger;

  public static parse(
    json: IRiskEvidenceSynthesisSampleSize,
    providedInstance: RiskEvidenceSynthesisSampleSize = new RiskEvidenceSynthesisSampleSize()
  ): RiskEvidenceSynthesisSampleSize {
    const newInstance: RiskEvidenceSynthesisSampleSize = BackboneElement.parse(json, providedInstance);
  
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.numberOfStudies) {
      newInstance.numberOfStudies = PrimitiveInteger.parsePrimitive(json.numberOfStudies, json._numberOfStudies);
    }
    if (json.numberOfParticipants) {
      newInstance.numberOfParticipants = PrimitiveInteger.parsePrimitive(json.numberOfParticipants, json._numberOfParticipants);
    }
    return newInstance;
  }

  public static isRiskEvidenceSynthesisSampleSize(input?: unknown): input is RiskEvidenceSynthesisSampleSize {
    const castInput = input as RiskEvidenceSynthesisSampleSize;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RiskEvidenceSynthesisSampleSize";
  }

  public toJSON(): IRiskEvidenceSynthesisSampleSize {
    const result: IRiskEvidenceSynthesisSampleSize = super.toJSON();

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
  
  public getTypeName(): string {
    return "RiskEvidenceSynthesisSampleSize";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
