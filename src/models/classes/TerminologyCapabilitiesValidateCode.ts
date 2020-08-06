/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ITerminologyCapabilitiesValidateCode,
  PrimitiveBoolean,
} from "../internal";

export class TerminologyCapabilitiesValidateCode extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities.ValidateCode";

  public translations?: PrimitiveBoolean;

  public static parse(
    json: ITerminologyCapabilitiesValidateCode,
    providedInstance: TerminologyCapabilitiesValidateCode = new TerminologyCapabilitiesValidateCode()
  ): TerminologyCapabilitiesValidateCode {
    const newInstance: TerminologyCapabilitiesValidateCode = BackboneElement.parse(json, providedInstance);
  
    if (json.translations) {
      newInstance.translations = PrimitiveBoolean.parsePrimitive(json.translations, json._translations);
    }
    return newInstance;
  }

  public static isTerminologyCapabilitiesValidateCode(input?: unknown): input is TerminologyCapabilitiesValidateCode {
    const castInput = input as TerminologyCapabilitiesValidateCode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TerminologyCapabilitiesValidateCode";
  }

  public toJSON(): ITerminologyCapabilitiesValidateCode {
    const result: ITerminologyCapabilitiesValidateCode = super.toJSON();

    if (this.translations) {
      result.translations = this.translations.value;
      result._translations = Extension.serializePrimitiveExtension(this.translations);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TerminologyCapabilitiesValidateCode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
