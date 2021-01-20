/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  ICapabilityStatementRestResourceSearchParam,
  PrimitiveCanonical,
  PrimitiveMarkdown,
  PrimitiveString,
  SearchParamType,
  FhirType
} from "../internal";

@FhirType("CapabilityStatementRestResourceSearchParam", "BackboneElement")
export class CapabilityStatementRestResourceSearchParam extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Rest.Resource.SearchParam";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveCanonical")
  public definition?: PrimitiveCanonical;

  @FhirField("SearchParamType")
  public type?: SearchParamType;

  @FhirField("PrimitiveMarkdown")
  public documentation?: PrimitiveMarkdown;

  public static parse(
    json: ICapabilityStatementRestResourceSearchParam,
    providedInstance: CapabilityStatementRestResourceSearchParam = new CapabilityStatementRestResourceSearchParam()
  ): CapabilityStatementRestResourceSearchParam {
    const newInstance: CapabilityStatementRestResourceSearchParam = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.definition !== undefined) {
      newInstance.definition = PrimitiveCanonical.parsePrimitive(json.definition, json._definition);
    }
    if (json.type !== undefined) {
      newInstance.type = SearchParamType.parsePrimitive(json.type, json._type);
    }
    if (json.documentation !== undefined) {
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

  public clone(): CapabilityStatementRestResourceSearchParam {
    return CapabilityStatementRestResourceSearchParam.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CapabilityStatementRestResourceSearchParam";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
