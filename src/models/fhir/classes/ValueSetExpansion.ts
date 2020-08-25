/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IValueSetExpansion,
  PrimitiveDateTime,
  PrimitiveInteger,
  PrimitiveUri,
  ValueSetExpansionContains,
  ValueSetExpansionParameter,
} from "../internal";

export class ValueSetExpansion extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ValueSet.Expansion";

  public identifier?: PrimitiveUri;

  public timestamp?: PrimitiveDateTime;

  public total?: PrimitiveInteger;

  public offset?: PrimitiveInteger;

  public parameter?: Array<ValueSetExpansionParameter>;

  public contains?: Array<ValueSetExpansionContains>;

  public static parse(
    json: IValueSetExpansion,
    providedInstance: ValueSetExpansion = new ValueSetExpansion()
  ): ValueSetExpansion {
    const newInstance: ValueSetExpansion = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = PrimitiveUri.parsePrimitive(json.identifier, json._identifier);
    }
    if (json.timestamp) {
      newInstance.timestamp = PrimitiveDateTime.parsePrimitive(json.timestamp, json._timestamp);
    }
    if (json.total) {
      newInstance.total = PrimitiveInteger.parsePrimitive(json.total, json._total);
    }
    if (json.offset) {
      newInstance.offset = PrimitiveInteger.parsePrimitive(json.offset, json._offset);
    }
    if (json.parameter) {
      newInstance.parameter = json.parameter.map((x) => ValueSetExpansionParameter.parse(x));
    }
    if (json.contains) {
      newInstance.contains = json.contains.map((x) => ValueSetExpansionContains.parse(x));
    }
    return newInstance;
  }

  public static isValueSetExpansion(input?: unknown): input is ValueSetExpansion {
    const castInput = input as ValueSetExpansion;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ValueSetExpansion";
  }

  public toJSON(): IValueSetExpansion {
    const result: IValueSetExpansion = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.value;
      result._identifier = Extension.serializePrimitiveExtension(this.identifier);
    }

    if (this.timestamp) {
      result.timestamp = this.timestamp.value;
      result._timestamp = Extension.serializePrimitiveExtension(this.timestamp);
    }

    if (this.total) {
      result.total = this.total.value;
      result._total = Extension.serializePrimitiveExtension(this.total);
    }

    if (this.offset) {
      result.offset = this.offset.value;
      result._offset = Extension.serializePrimitiveExtension(this.offset);
    }

    if (this.parameter) {
      result.parameter = this.parameter.map((x) => x.toJSON());
    }

    if (this.contains) {
      result.contains = this.contains.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ValueSetExpansion";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
