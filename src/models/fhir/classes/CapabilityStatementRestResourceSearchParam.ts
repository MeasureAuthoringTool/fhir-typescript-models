/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ICapabilityStatementRestResourceSearchParam,
  PrimitiveCanonical,
  PrimitiveMarkdown,
  PrimitiveString,
  SearchParamType,
} from "../internal";

export class CapabilityStatementRestResourceSearchParam extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Rest.Resource.SearchParam";

  public name?: PrimitiveString;

  public definition?: PrimitiveCanonical;

  public type?: SearchParamType;

  public documentation?: PrimitiveMarkdown;

  public static parse(
    json: ICapabilityStatementRestResourceSearchParam,
    providedInstance: CapabilityStatementRestResourceSearchParam = new CapabilityStatementRestResourceSearchParam()
  ): CapabilityStatementRestResourceSearchParam {
    const newInstance: CapabilityStatementRestResourceSearchParam = BackboneElement.parse(json, providedInstance);
  
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.definition) {
      newInstance.definition = PrimitiveCanonical.parsePrimitive(json.definition, json._definition);
    }
    if (json.type) {
      newInstance.type = SearchParamType.parsePrimitive(json.type, json._type);
    }
    if (json.documentation) {
      newInstance.documentation = PrimitiveMarkdown.parsePrimitive(json.documentation, json._documentation);
    }
    return newInstance;
  }

  public static isCapabilityStatementRestResourceSearchParam(input?: unknown): input is CapabilityStatementRestResourceSearchParam {
    const castInput = input as CapabilityStatementRestResourceSearchParam;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatementRestResourceSearchParam";
  }

  public toJSON(): ICapabilityStatementRestResourceSearchParam {
    const result: ICapabilityStatementRestResourceSearchParam = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.definition) {
      result.definition = this.definition.value;
      result._definition = Extension.serializePrimitiveExtension(this.definition);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "CapabilityStatementRestResourceSearchParam";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
