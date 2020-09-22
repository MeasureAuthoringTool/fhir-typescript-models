/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Coding,
  Element,
  Extension,
  ISignature,
  MimeType,
  PrimitiveBase64Binary,
  PrimitiveInstant,
  Reference,
} from "../internal";

export class Signature extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Signature";
  
  static readonly primaryCodePath: string | null = null;

  public type?: Array<Coding>;

  public when?: PrimitiveInstant;

  public who?: Reference;

  public onBehalfOf?: Reference;

  public targetFormat?: MimeType;

  public sigFormat?: MimeType;

  public data?: PrimitiveBase64Binary;

  public static parse(
    json: ISignature,
    providedInstance: Signature = new Signature()
  ): Signature {
    const newInstance: Signature = Element.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => Coding.parse(x));
    }
    if (json.when !== undefined) {
      newInstance.when = PrimitiveInstant.parsePrimitive(json.when, json._when);
    }
    if (json.who !== undefined) {
      newInstance.who = Reference.parse(json.who);
    }
    if (json.onBehalfOf !== undefined) {
      newInstance.onBehalfOf = Reference.parse(json.onBehalfOf);
    }
    if (json.targetFormat !== undefined) {
      newInstance.targetFormat = MimeType.parsePrimitive(json.targetFormat, json._targetFormat);
    }
    if (json.sigFormat !== undefined) {
      newInstance.sigFormat = MimeType.parsePrimitive(json.sigFormat, json._sigFormat);
    }
    if (json.data !== undefined) {
      newInstance.data = PrimitiveBase64Binary.parsePrimitive(json.data, json._data);
    }
    return newInstance;
  }

  public static isSignature(input?: unknown): input is Signature {
    const castInput = input as Signature;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Signature";
  }

  public toJSON(): ISignature {
    const result: ISignature = super.toJSON();

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.when) {
      result.when = this.when.value;
      result._when = Extension.serializePrimitiveExtension(this.when);
    }

    if (this.who) {
      result.who = this.who.toJSON();
    }

    if (this.onBehalfOf) {
      result.onBehalfOf = this.onBehalfOf.toJSON();
    }

    if (this.targetFormat) {
      result.targetFormat = this.targetFormat.value;
      result._targetFormat = Extension.serializePrimitiveExtension(this.targetFormat);
    }

    if (this.sigFormat) {
      result.sigFormat = this.sigFormat.value;
      result._sigFormat = Extension.serializePrimitiveExtension(this.sigFormat);
    }

    if (this.data) {
      result.data = this.data.value;
      result._data = Extension.serializePrimitiveExtension(this.data);
    }

    return result;
  }

  public clone(): Signature {
    return Signature.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Signature";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
