/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ICodeSystemProperty,
  PrimitiveCode,
  PrimitiveString,
  PrimitiveUri,
  PropertyType,
  FieldMetadata
} from "../internal";

export class CodeSystemProperty extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CodeSystem.Property";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "code",
      fieldType: [PrimitiveCode],
      isArray: false
    }, {
      fieldName: "uri",
      fieldType: [PrimitiveUri],
      isArray: false
    }, {
      fieldName: "description",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "type",
      fieldType: [PropertyType],
      isArray: false
    }];
  }

  public code?: PrimitiveCode;

  public uri?: PrimitiveUri;

  public description?: PrimitiveString;

  public type?: PropertyType;

  public static parse(
    json: ICodeSystemProperty,
    providedInstance: CodeSystemProperty = new CodeSystemProperty()
  ): CodeSystemProperty {
    const newInstance: CodeSystemProperty = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.uri !== undefined) {
      newInstance.uri = PrimitiveUri.parsePrimitive(json.uri, json._uri);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.type !== undefined) {
      newInstance.type = PropertyType.parsePrimitive(json.type, json._type);
    }
    return newInstance;
  }

  public static isCodeSystemProperty(input?: unknown): input is CodeSystemProperty {
    const castInput = input as CodeSystemProperty;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CodeSystemProperty";
  }

  public toJSON(): ICodeSystemProperty {
    const result: ICodeSystemProperty = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.uri) {
      result.uri = this.uri.value;
      result._uri = Extension.serializePrimitiveExtension(this.uri);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    return result;
  }

  public clone(): CodeSystemProperty {
    return CodeSystemProperty.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CodeSystemProperty";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
