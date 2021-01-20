/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirChoice,
  FhirField,
  IValueSetExpansionParameter,
  PrimitiveBoolean,
  PrimitiveCode,
  PrimitiveDateTime,
  PrimitiveDecimal,
  PrimitiveInteger,
  PrimitiveString,
  PrimitiveUri,
  FhirType
} from "../internal";

@FhirType("ValueSetExpansionParameter", "BackboneElement")
export class ValueSetExpansionParameter extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ValueSet.Expansion.Parameter";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirChoice("PrimitiveString", "PrimitiveBoolean", "PrimitiveInteger", "PrimitiveDecimal", "PrimitiveUri", "PrimitiveCode", "PrimitiveDateTime")
  public value?: PrimitiveString | PrimitiveBoolean | PrimitiveInteger | PrimitiveDecimal | PrimitiveUri | PrimitiveCode | PrimitiveDateTime;

  public static parse(
    json: IValueSetExpansionParameter,
    providedInstance: ValueSetExpansionParameter = new ValueSetExpansionParameter()
  ): ValueSetExpansionParameter {
    const newInstance: ValueSetExpansionParameter = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.valueString !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.valueString, json._valueString);
    }
    if (json.valueBoolean !== undefined) {
      newInstance.value = PrimitiveBoolean.parsePrimitive(json.valueBoolean, json._valueBoolean);
    }
    if (json.valueInteger !== undefined) {
      newInstance.value = PrimitiveInteger.parsePrimitive(json.valueInteger, json._valueInteger);
    }
    if (json.valueDecimal !== undefined) {
      newInstance.value = PrimitiveDecimal.parsePrimitive(json.valueDecimal, json._valueDecimal);
    }
    if (json.valueUri !== undefined) {
      newInstance.value = PrimitiveUri.parsePrimitive(json.valueUri, json._valueUri);
    }
    if (json.valueCode !== undefined) {
      newInstance.value = PrimitiveCode.parsePrimitive(json.valueCode, json._valueCode);
    }
    if (json.valueDateTime !== undefined) {
      newInstance.value = PrimitiveDateTime.parsePrimitive(json.valueDateTime, json._valueDateTime);
    }
    return newInstance;
  }

  public static isValueSetExpansionParameter(input?: unknown): input is ValueSetExpansionParameter {
    const castInput = input as ValueSetExpansionParameter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ValueSetExpansionParameter";
  }

  public toJSON(): IValueSetExpansionParameter {
    const result: IValueSetExpansionParameter = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.value && PrimitiveString.isPrimitiveString(this.value)) {
      result.valueString = this.value.value;
      result._valueString = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveBoolean.isPrimitiveBoolean(this.value)) {
      result.valueBoolean = this.value.value;
      result._valueBoolean = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveInteger.isPrimitiveInteger(this.value)) {
      result.valueInteger = this.value.value;
      result._valueInteger = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveDecimal.isPrimitiveDecimal(this.value)) {
      result.valueDecimal = this.value.value;
      result._valueDecimal = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveUri.isPrimitiveUri(this.value)) {
      result.valueUri = this.value.value;
      result._valueUri = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveCode.isPrimitiveCode(this.value)) {
      result.valueCode = this.value.value;
      result._valueCode = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveDateTime.isPrimitiveDateTime(this.value)) {
      result.valueDateTime = this.value.value;
      result._valueDateTime = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }

  public clone(): ValueSetExpansionParameter {
    return ValueSetExpansionParameter.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ValueSetExpansionParameter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
