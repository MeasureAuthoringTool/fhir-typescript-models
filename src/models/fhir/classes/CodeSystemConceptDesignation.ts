/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  Extension,
  FhirField,
  ICodeSystemConceptDesignation,
  PrimitiveCode,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("CodeSystemConceptDesignation", "BackboneElement")
export class CodeSystemConceptDesignation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CodeSystem.Concept.Designation";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveCode")
  public language?: PrimitiveCode;

  @FhirField("Coding")
  public use?: Coding;

  @FhirField("PrimitiveString")
  public value?: PrimitiveString;

  public static parse(
    json: ICodeSystemConceptDesignation,
    providedInstance: CodeSystemConceptDesignation = new CodeSystemConceptDesignation()
  ): CodeSystemConceptDesignation {
    const newInstance: CodeSystemConceptDesignation = BackboneElement.parse(json, providedInstance);
  
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

  public static isCodeSystemConceptDesignation(input?: unknown): input is CodeSystemConceptDesignation {
    const castInput = input as CodeSystemConceptDesignation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CodeSystemConceptDesignation";
  }

  public toJSON(): ICodeSystemConceptDesignation {
    const result: ICodeSystemConceptDesignation = super.toJSON();

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

  public clone(): CodeSystemConceptDesignation {
    return CodeSystemConceptDesignation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CodeSystemConceptDesignation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
