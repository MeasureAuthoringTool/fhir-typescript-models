/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  Extension,
  FhirField,
  IElementDefinitionMapping,
  MimeType,
  PrimitiveId,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ElementDefinitionMapping", "Element")
export class ElementDefinitionMapping extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ElementDefinition.Mapping";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveId")
  public identity?: PrimitiveId;

  @FhirField("MimeType")
  public language?: MimeType;

  @FhirField("PrimitiveString")
  public map?: PrimitiveString;

  @FhirField("PrimitiveString")
  public comment?: PrimitiveString;

  public static parse(
    json: IElementDefinitionMapping,
    providedInstance: ElementDefinitionMapping = new ElementDefinitionMapping()
  ): ElementDefinitionMapping {
    const newInstance: ElementDefinitionMapping = Element.parse(json, providedInstance);
  
    if (json.identity !== undefined) {
      newInstance.identity = PrimitiveId.parsePrimitive(json.identity, json._identity);
    }
    if (json.language !== undefined) {
      newInstance.language = MimeType.parsePrimitive(json.language, json._language);
    }
    if (json.map !== undefined) {
      newInstance.map = PrimitiveString.parsePrimitive(json.map, json._map);
    }
    if (json.comment !== undefined) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    return newInstance;
  }

  public static isElementDefinitionMapping(input?: unknown): input is ElementDefinitionMapping {
    const castInput = input as ElementDefinitionMapping;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ElementDefinitionMapping";
  }

  public toJSON(): IElementDefinitionMapping {
    const result: IElementDefinitionMapping = super.toJSON();

    if (this.identity) {
      result.identity = this.identity.value;
      result._identity = Extension.serializePrimitiveExtension(this.identity);
    }

    if (this.language) {
      result.language = this.language.value;
      result._language = Extension.serializePrimitiveExtension(this.language);
    }

    if (this.map) {
      result.map = this.map.value;
      result._map = Extension.serializePrimitiveExtension(this.map);
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    return result;
  }

  public clone(): ElementDefinitionMapping {
    return ElementDefinitionMapping.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ElementDefinitionMapping";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
