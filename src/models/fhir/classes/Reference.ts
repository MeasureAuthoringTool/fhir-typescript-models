/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  Extension,
  Identifier,
  IReference,
  PrimitiveString,
  PrimitiveUri,
} from "../internal";

export class Reference extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Reference";

  public reference?: PrimitiveString;

  public type?: PrimitiveUri;

  public identifier?: Identifier;

  public display?: PrimitiveString;

  public static parse(
    json: IReference,
    providedInstance: Reference = new Reference()
  ): Reference {
    const newInstance: Reference = Element.parse(json, providedInstance);
  
    if (json.reference) {
      newInstance.reference = PrimitiveString.parsePrimitive(json.reference, json._reference);
    }
    if (json.type) {
      newInstance.type = PrimitiveUri.parsePrimitive(json.type, json._type);
    }
    if (json.identifier) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.display) {
      newInstance.display = PrimitiveString.parsePrimitive(json.display, json._display);
    }
    return newInstance;
  }

  public static isReference(input?: unknown): input is Reference {
    const castInput = input as Reference;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Reference";
  }

  public toJSON(): IReference {
    const result: IReference = super.toJSON();

    if (this.reference) {
      result.reference = this.reference.value;
      result._reference = Extension.serializePrimitiveExtension(this.reference);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.display) {
      result.display = this.display.value;
      result._display = Extension.serializePrimitiveExtension(this.display);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Reference";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
