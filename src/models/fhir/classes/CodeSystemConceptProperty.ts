/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  Extension,
  FhirChoice,
  FhirField,
  ICodeSystemConceptProperty,
  PrimitiveBoolean,
  PrimitiveCode,
  PrimitiveDateTime,
  PrimitiveDecimal,
  PrimitiveInteger,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("CodeSystemConceptProperty", "BackboneElement")
export class CodeSystemConceptProperty extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CodeSystem.Concept.Property";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveCode")
  public code?: PrimitiveCode;

  @FhirChoice("PrimitiveCode", "Coding", "PrimitiveString", "PrimitiveInteger", "PrimitiveBoolean", "PrimitiveDateTime", "PrimitiveDecimal")
  public value?: PrimitiveCode | Coding | PrimitiveString | PrimitiveInteger | PrimitiveBoolean | PrimitiveDateTime | PrimitiveDecimal;

  public static parse(
    json: ICodeSystemConceptProperty,
    providedInstance: CodeSystemConceptProperty = new CodeSystemConceptProperty()
  ): CodeSystemConceptProperty {
    const newInstance: CodeSystemConceptProperty = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.valueCode !== undefined) {
      newInstance.value = PrimitiveCode.parsePrimitive(json.valueCode, json._valueCode);
    }
    if (json.valueCoding !== undefined) {
      newInstance.value = Coding.parse(json.valueCoding);
    }
    if (json.valueString !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.valueString, json._valueString);
    }
    if (json.valueInteger !== undefined) {
      newInstance.value = PrimitiveInteger.parsePrimitive(json.valueInteger, json._valueInteger);
    }
    if (json.valueBoolean !== undefined) {
      newInstance.value = PrimitiveBoolean.parsePrimitive(json.valueBoolean, json._valueBoolean);
    }
    if (json.valueDateTime !== undefined) {
      newInstance.value = PrimitiveDateTime.parsePrimitive(json.valueDateTime, json._valueDateTime);
    }
    if (json.valueDecimal !== undefined) {
      newInstance.value = PrimitiveDecimal.parsePrimitive(json.valueDecimal, json._valueDecimal);
    }
    return newInstance;
  }

  public static isCodeSystemConceptProperty(input?: unknown): input is CodeSystemConceptProperty {
    const castInput = input as CodeSystemConceptProperty;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CodeSystemConceptProperty";
  }

  public toJSON(): ICodeSystemConceptProperty {
    const result: ICodeSystemConceptProperty = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.value && PrimitiveCode.isPrimitiveCode(this.value)) {
      result.valueCode = this.value.value;
      result._valueCode = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && Coding.isCoding(this.value)) {
      result.valueCoding = this.value.toJSON();
    }

    if (this.value && PrimitiveString.isPrimitiveString(this.value)) {
      result.valueString = this.value.value;
      result._valueString = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveInteger.isPrimitiveInteger(this.value)) {
      result.valueInteger = this.value.value;
      result._valueInteger = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveBoolean.isPrimitiveBoolean(this.value)) {
      result.valueBoolean = this.value.value;
      result._valueBoolean = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveDateTime.isPrimitiveDateTime(this.value)) {
      result.valueDateTime = this.value.value;
      result._valueDateTime = Extension.serializePrimitiveExtension(this.value);
    }

    if (this.value && PrimitiveDecimal.isPrimitiveDecimal(this.value)) {
      result.valueDecimal = this.value.value;
      result._valueDecimal = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }

  public clone(): CodeSystemConceptProperty {
    return CodeSystemConceptProperty.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CodeSystemConceptProperty";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
