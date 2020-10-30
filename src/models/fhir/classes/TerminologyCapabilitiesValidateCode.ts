/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ITerminologyCapabilitiesValidateCode,
  PrimitiveBoolean,
  FieldMetadata
} from "../internal";

export class TerminologyCapabilitiesValidateCode extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities.ValidateCode";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "translations",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }];
  }

  public translations?: PrimitiveBoolean;

  public static parse(
    json: ITerminologyCapabilitiesValidateCode,
    providedInstance: TerminologyCapabilitiesValidateCode = new TerminologyCapabilitiesValidateCode()
  ): TerminologyCapabilitiesValidateCode {
    const newInstance: TerminologyCapabilitiesValidateCode = BackboneElement.parse(json, providedInstance);
  
    if (json.translations !== undefined) {
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

  public clone(): TerminologyCapabilitiesValidateCode {
    return TerminologyCapabilitiesValidateCode.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TerminologyCapabilitiesValidateCode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
