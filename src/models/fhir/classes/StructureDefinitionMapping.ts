/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IStructureDefinitionMapping,
  PrimitiveId,
  PrimitiveString,
  PrimitiveUri,
} from "../internal";

export class StructureDefinitionMapping extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureDefinition.Mapping";

  public identity?: PrimitiveId;

  public uri?: PrimitiveUri;

  public name?: PrimitiveString;

  public comment?: PrimitiveString;

  public static parse(
    json: IStructureDefinitionMapping,
    providedInstance: StructureDefinitionMapping = new StructureDefinitionMapping()
  ): StructureDefinitionMapping {
    const newInstance: StructureDefinitionMapping = BackboneElement.parse(json, providedInstance);
  
    if (json.identity !== undefined) {
      newInstance.identity = PrimitiveId.parsePrimitive(json.identity, json._identity);
    }
    if (json.uri !== undefined) {
      newInstance.uri = PrimitiveUri.parsePrimitive(json.uri, json._uri);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.comment !== undefined) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    return newInstance;
  }

  public static isStructureDefinitionMapping(input?: unknown): input is StructureDefinitionMapping {
    const castInput = input as StructureDefinitionMapping;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureDefinitionMapping";
  }

  public toJSON(): IStructureDefinitionMapping {
    const result: IStructureDefinitionMapping = super.toJSON();

    if (this.identity) {
      result.identity = this.identity.value;
      result._identity = Extension.serializePrimitiveExtension(this.identity);
    }

    if (this.uri) {
      result.uri = this.uri.value;
      result._uri = Extension.serializePrimitiveExtension(this.uri);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    return result;
  }

  public clone(): StructureDefinitionMapping {
    return StructureDefinitionMapping.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "StructureDefinitionMapping";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
