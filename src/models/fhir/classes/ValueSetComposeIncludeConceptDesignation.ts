/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  Extension,
  FhirField,
  IValueSetComposeIncludeConceptDesignation,
  PrimitiveCode,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ValueSetComposeIncludeConceptDesignation", "BackboneElement")
export class ValueSetComposeIncludeConceptDesignation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ValueSet.Compose.Include.Concept.Designation";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveCode")
  public language?: PrimitiveCode;

  @FhirField("Coding")
  public use?: Coding;

  @FhirField("PrimitiveString")
  public value?: PrimitiveString;

  public static parse(
    json: IValueSetComposeIncludeConceptDesignation,
    providedInstance: ValueSetComposeIncludeConceptDesignation = new ValueSetComposeIncludeConceptDesignation()
  ): ValueSetComposeIncludeConceptDesignation {
    const newInstance: ValueSetComposeIncludeConceptDesignation = BackboneElement.parse(json, providedInstance);
  
    if (json.language !== undefined) {
      newInstance.language = PrimitiveCode.parsePrimitive(json.language, json._language);
    }
    if (json.use !== undefined) {
      newInstance.use = Coding.parse(json.use);
    }
    if (json.value !== undefined) {
      newInstance.value = PrimitiveString.parsePrimitive(json.value, json._value);
    }
    return newInstance;
  }

  public static isValueSetComposeIncludeConceptDesignation(input?: unknown): input is ValueSetComposeIncludeConceptDesignation {
    const castInput = input as ValueSetComposeIncludeConceptDesignation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ValueSetComposeIncludeConceptDesignation";
  }

  public toJSON(): IValueSetComposeIncludeConceptDesignation {
    const result: IValueSetComposeIncludeConceptDesignation = super.toJSON();

    if (this.language) {
      result.language = this.language.value;
      result._language = Extension.serializePrimitiveExtension(this.language);
    }

    if (this.use) {
      result.use = this.use.toJSON();
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }

  public clone(): ValueSetComposeIncludeConceptDesignation {
    return ValueSetComposeIncludeConceptDesignation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ValueSetComposeIncludeConceptDesignation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
