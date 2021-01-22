/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  ITerminologyCapabilitiesTranslation,
  PrimitiveBoolean,
  FhirType
} from "../internal";

@FhirType("TerminologyCapabilitiesTranslation", "BackboneElement")
export class TerminologyCapabilitiesTranslation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities.Translation";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveBoolean")
  public needsMap?: PrimitiveBoolean;

  public static parse(
    json: ITerminologyCapabilitiesTranslation,
    providedInstance: TerminologyCapabilitiesTranslation = new TerminologyCapabilitiesTranslation()
  ): TerminologyCapabilitiesTranslation {
    const newInstance: TerminologyCapabilitiesTranslation = BackboneElement.parse(json, providedInstance);
  
    if (json.needsMap !== undefined) {
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

  public clone(): TerminologyCapabilitiesTranslation {
    return TerminologyCapabilitiesTranslation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TerminologyCapabilitiesTranslation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
