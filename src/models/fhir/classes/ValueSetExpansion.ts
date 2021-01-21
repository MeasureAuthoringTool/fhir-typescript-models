/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  IValueSetExpansion,
  PrimitiveDateTime,
  PrimitiveInteger,
  PrimitiveUri,
  ValueSetExpansionContains,
  ValueSetExpansionParameter,
  FhirType
} from "../internal";

@FhirType("ValueSetExpansion", "BackboneElement")
export class ValueSetExpansion extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ValueSet.Expansion";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveUri")
  public identifier?: PrimitiveUri;

  @FhirField("PrimitiveDateTime")
  public timestamp?: PrimitiveDateTime;

  @FhirField("PrimitiveInteger")
  public total?: PrimitiveInteger;

  @FhirField("PrimitiveInteger")
  public offset?: PrimitiveInteger;

  @FhirList("ValueSetExpansionParameter")
  public parameter?: Array<ValueSetExpansionParameter>;

  @FhirList("ValueSetExpansionContains")
  public contains?: Array<ValueSetExpansionContains>;

  public static parse(
    json: IValueSetExpansion,
    providedInstance: ValueSetExpansion = new ValueSetExpansion()
  ): ValueSetExpansion {
    const newInstance: ValueSetExpansion = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = PrimitiveUri.parsePrimitive(json.identifier, json._identifier);
    }
    if (json.timestamp !== undefined) {
      newInstance.timestamp = PrimitiveDateTime.parsePrimitive(json.timestamp, json._timestamp);
    }
    if (json.total !== undefined) {
      newInstance.total = PrimitiveInteger.parsePrimitive(json.total, json._total);
    }
    if (json.offset !== undefined) {
      newInstance.offset = PrimitiveInteger.parsePrimitive(json.offset, json._offset);
    }
    if (json.parameter !== undefined) {
      newInstance.parameter = json.parameter.map((x) => ValueSetExpansionParameter.parse(x));
    }
    if (json.contains !== undefined) {
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

  public clone(): ValueSetExpansion {
    return ValueSetExpansion.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ValueSetExpansion";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
