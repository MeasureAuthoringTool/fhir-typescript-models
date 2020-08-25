/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  INamingSystemUniqueId,
  NamingSystemIdentifierType,
  Period,
  PrimitiveBoolean,
  PrimitiveString,
} from "../internal";

export class NamingSystemUniqueId extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NamingSystem.UniqueId";

  public type?: NamingSystemIdentifierType;

  public value?: PrimitiveString;

  public preferred?: PrimitiveBoolean;

  public comment?: PrimitiveString;

  public period?: Period;

  public static parse(
    json: INamingSystemUniqueId,
    providedInstance: NamingSystemUniqueId = new NamingSystemUniqueId()
  ): NamingSystemUniqueId {
    const newInstance: NamingSystemUniqueId = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = NamingSystemIdentifierType.parsePrimitive(json.type, json._type);
    }
    if (json.value) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    if (json.preferred) {
      newInstance.preferred = PrimitiveBoolean.parsePrimitive(json.preferred, json._preferred);
    }
    if (json.comment) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    if (json.period) {
      newInstance.period = Period.parse(json.period);
    }
    return newInstance;
  }

  public static isNamingSystemUniqueId(input?: unknown): input is NamingSystemUniqueId {
    const castInput = input as NamingSystemUniqueId;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NamingSystemUniqueId";
  }

  public toJSON(): INamingSystemUniqueId {
    const result: INamingSystemUniqueId = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.preferred) {
      result.preferred = this.preferred.value;
      result._preferred = Extension.serializePrimitiveExtension(this.preferred);
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "NamingSystemUniqueId";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
