/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  Extension,
  ICoding,
  PrimitiveBoolean,
  PrimitiveCode,
  PrimitiveString,
  PrimitiveUri,
} from "../internal";

export class Coding extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Coding";
  
  static readonly primaryCodePath: string | null = "code";

  public system?: PrimitiveUri;

  public version?: PrimitiveString;

  public code?: PrimitiveCode;

  public display?: PrimitiveString;

  public userSelected?: PrimitiveBoolean;

  get primaryCode(): PrimitiveCode | undefined {
    return this.code;
  }

  set primaryCode(primaryCode: PrimitiveCode | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: ICoding,
    providedInstance: Coding = new Coding()
  ): Coding {
    const newInstance: Coding = Element.parse(json, providedInstance);
  
    if (json.system !== undefined) {
      newInstance.system = PrimitiveUri.parsePrimitive(json.system, json._system);
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.code !== undefined) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.display !== undefined) {
      newInstance.display = PrimitiveString.parsePrimitive(json.display, json._display);
    }
    if (json.userSelected !== undefined) {
      newInstance.userSelected = PrimitiveBoolean.parsePrimitive(json.userSelected, json._userSelected);
    }
    return newInstance;
  }

  public static isCoding(input?: unknown): input is Coding {
    const castInput = input as Coding;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Coding";
  }

  public toJSON(): ICoding {
    const result: ICoding = super.toJSON();

    if (this.system) {
      result.system = this.system.value;
      result._system = Extension.serializePrimitiveExtension(this.system);
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.display) {
      result.display = this.display.value;
      result._display = Extension.serializePrimitiveExtension(this.display);
    }

    if (this.userSelected) {
      result.userSelected = this.userSelected.value;
      result._userSelected = Extension.serializePrimitiveExtension(this.userSelected);
    }

    return result;
  }

  public clone(): Coding {
    return Coding.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Coding";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
