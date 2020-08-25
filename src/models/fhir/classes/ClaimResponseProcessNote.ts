/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IClaimResponseProcessNote,
  NoteType,
  PrimitivePositiveInt,
  PrimitiveString,
} from "../internal";

export class ClaimResponseProcessNote extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse.ProcessNote";

  public number?: PrimitivePositiveInt;

  public type?: NoteType;

  public text?: PrimitiveString;

  public language?: CodeableConcept;

  public static parse(
    json: IClaimResponseProcessNote,
    providedInstance: ClaimResponseProcessNote = new ClaimResponseProcessNote()
  ): ClaimResponseProcessNote {
    const newInstance: ClaimResponseProcessNote = BackboneElement.parse(json, providedInstance);
  
    if (json.number) {
      newInstance.number = PrimitivePositiveInt.parsePrimitive(json.number, json._number);
    }
    if (json.type) {
      newInstance.type = NoteType.parsePrimitive(json.type, json._type);
    }
    if (json.text) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    if (json.language) {
      newInstance.language = CodeableConcept.parse(json.language);
    }
    return newInstance;
  }

  public static isClaimResponseProcessNote(input?: unknown): input is ClaimResponseProcessNote {
    const castInput = input as ClaimResponseProcessNote;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimResponseProcessNote";
  }

  public toJSON(): IClaimResponseProcessNote {
    const result: IClaimResponseProcessNote = super.toJSON();

    if (this.number) {
      result.number = this.number.value;
      result._number = Extension.serializePrimitiveExtension(this.number);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
    }

    if (this.language) {
      result.language = this.language.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ClaimResponseProcessNote";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
