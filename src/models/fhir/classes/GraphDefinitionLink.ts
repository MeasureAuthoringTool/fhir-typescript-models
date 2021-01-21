/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  GraphDefinitionLinkTarget,
  IGraphDefinitionLink,
  PrimitiveInteger,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("GraphDefinitionLink", "BackboneElement")
export class GraphDefinitionLink extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "GraphDefinition.Link";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public path?: PrimitiveString;

  @FhirField("PrimitiveString")
  public sliceName?: PrimitiveString;

  @FhirField("PrimitiveInteger")
  public min?: PrimitiveInteger;

  @FhirField("PrimitiveString")
  public max?: PrimitiveString;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirList("GraphDefinitionLinkTarget")
  public target?: Array<GraphDefinitionLinkTarget>;

  public static parse(
    json: IGraphDefinitionLink,
    providedInstance: GraphDefinitionLink = new GraphDefinitionLink()
  ): GraphDefinitionLink {
    const newInstance: GraphDefinitionLink = BackboneElement.parse(json, providedInstance);
  
    if (json.path !== undefined) {
      newInstance.path = PrimitiveString.parsePrimitive(json.path, json._path);
    }
    if (json.sliceName !== undefined) {
      newInstance.sliceName = PrimitiveString.parsePrimitive(json.sliceName, json._sliceName);
    }
    if (json.min !== undefined) {
      newInstance.min = PrimitiveInteger.parsePrimitive(json.min, json._min);
    }
    if (json.max !== undefined) {
      newInstance.max = PrimitiveString.parsePrimitive(json.max, json._max);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.target !== undefined) {
      newInstance.target = json.target.map((x) => GraphDefinitionLinkTarget.parse(x));
    }
    return newInstance;
  }

  public static isGraphDefinitionLink(input?: unknown): input is GraphDefinitionLink {
    const castInput = input as GraphDefinitionLink;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GraphDefinitionLink";
  }

  public toJSON(): IGraphDefinitionLink {
    const result: IGraphDefinitionLink = super.toJSON();

    if (this.path) {
      result.path = this.path.value;
      result._path = Extension.serializePrimitiveExtension(this.path);
    }

    if (this.sliceName) {
      result.sliceName = this.sliceName.value;
      result._sliceName = Extension.serializePrimitiveExtension(this.sliceName);
    }

    if (this.min) {
      result.min = this.min.value;
      result._min = Extension.serializePrimitiveExtension(this.min);
    }

    if (this.max) {
      result.max = this.max.value;
      result._max = Extension.serializePrimitiveExtension(this.max);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.target) {
      result.target = this.target.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): GraphDefinitionLink {
    return GraphDefinitionLink.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "GraphDefinitionLink";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
