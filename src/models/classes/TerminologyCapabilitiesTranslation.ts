/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ITerminologyCapabilitiesTranslation,
  PrimitiveBoolean,
} from "../internal";

export class TerminologyCapabilitiesTranslation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities.Translation";

  public needsMap?: PrimitiveBoolean;

  public static parse(
    json: ITerminologyCapabilitiesTranslation,
    providedInstance: TerminologyCapabilitiesTranslation = new TerminologyCapabilitiesTranslation()
  ): TerminologyCapabilitiesTranslation {
    const newInstance: TerminologyCapabilitiesTranslation = BackboneElement.parse(json, providedInstance);
  
    if (json.needsMap) {
      newInstance.needsMap = PrimitiveBoolean.parsePrimitive(json.needsMap, json._needsMap);
    }
    return newInstance;
  }

  public static isTerminologyCapabilitiesTranslation(input?: unknown): input is TerminologyCapabilitiesTranslation {
    const castInput = input as TerminologyCapabilitiesTranslation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TerminologyCapabilitiesTranslation";
  }

  public toJSON(): ITerminologyCapabilitiesTranslation {
    const result: ITerminologyCapabilitiesTranslation = super.toJSON();

    if (this.needsMap) {
      result.needsMap = this.needsMap.value;
      result._needsMap = Extension.serializePrimitiveExtension(this.needsMap);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TerminologyCapabilitiesTranslation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
