/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeSystemConceptDesignation,
  CodeSystemConceptProperty,
  Extension,
  ICodeSystemConcept,
  PrimitiveCode,
  PrimitiveString,
  FieldMetadata
} from "../internal";

export class CodeSystemConcept extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CodeSystem.Concept";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "code",
      fieldType: [PrimitiveCode],
      isArray: false
    }, {
      fieldName: "display",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "definition",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "designation",
      fieldType: [CodeSystemConceptDesignation],
      isArray: true
    }, {
      fieldName: "property",
      fieldType: [CodeSystemConceptProperty],
      isArray: true
    }, {
      fieldName: "concept",
      fieldType: [CodeSystemConcept],
      isArray: true
    }];
  }

  public code?: PrimitiveCode;

  public display?: PrimitiveString;

  public definition?: PrimitiveString;

  public designation?: Array<CodeSystemConceptDesignation>;

  public property?: Array<CodeSystemConceptProperty>;

  public concept?: Array<CodeSystemConcept>;

  public static parse(
    json: ICodeSystemConcept,
    providedInstance: CodeSystemConcept = new CodeSystemConcept()
  ): CodeSystemConcept {
    const newInstance: CodeSystemConcept = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.display !== undefined) {
      newInstance.display = PrimitiveString.parsePrimitive(json.display, json._display);
    }
    if (json.definition !== undefined) {
      newInstance.definition = PrimitiveString.parsePrimitive(json.definition, json._definition);
    }
    if (json.designation !== undefined) {
      newInstance.designation = json.designation.map((x) => CodeSystemConceptDesignation.parse(x));
    }
    if (json.property !== undefined) {
      newInstance.property = json.property.map((x) => CodeSystemConceptProperty.parse(x));
    }
    if (json.concept !== undefined) {
      newInstance.concept = json.concept.map((x) => CodeSystemConcept.parse(x));
    }
    return newInstance;
  }

  public static isCodeSystemConcept(input?: unknown): input is CodeSystemConcept {
    const castInput = input as CodeSystemConcept;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CodeSystemConcept";
  }

  public toJSON(): ICodeSystemConcept {
    const result: ICodeSystemConcept = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.display) {
      result.display = this.display.value;
      result._display = Extension.serializePrimitiveExtension(this.display);
    }

    if (this.definition) {
      result.definition = this.definition.value;
      result._definition = Extension.serializePrimitiveExtension(this.definition);
    }

    if (this.designation) {
      result.designation = this.designation.map((x) => x.toJSON());
    }

    if (this.property) {
      result.property = this.property.map((x) => x.toJSON());
    }

    if (this.concept) {
      result.concept = this.concept.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): CodeSystemConcept {
    return CodeSystemConcept.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CodeSystemConcept";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
