/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  GraphDefinitionLink,
  GraphDefinitionLinkTargetCompartment,
  IGraphDefinitionLinkTarget,
  PrimitiveCanonical,
  PrimitiveString,
  ResourceType,
} from "../internal";

export class GraphDefinitionLinkTarget extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "GraphDefinition.Link.Target";

  public type?: ResourceType;

  public params?: PrimitiveString;

  public profile?: PrimitiveCanonical;

  public compartment?: Array<GraphDefinitionLinkTargetCompartment>;

  public link?: Array<GraphDefinitionLink>;

  public static parse(
    json: IGraphDefinitionLinkTarget,
    providedInstance: GraphDefinitionLinkTarget = new GraphDefinitionLinkTarget()
  ): GraphDefinitionLinkTarget {
    const newInstance: GraphDefinitionLinkTarget = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = ResourceType.parsePrimitive(json.type, json._type);
    }
    if (json.params) {
      newInstance.params = PrimitiveString.parsePrimitive(json.params, json._params);
    }
    if (json.profile) {
      newInstance.profile = PrimitiveCanonical.parsePrimitive(json.profile, json._profile);
    }
    if (json.compartment) {
      newInstance.compartment = json.compartment.map((x) => GraphDefinitionLinkTargetCompartment.parse(x));
    }
    if (json.link) {
      newInstance.link = json.link.map((x) => GraphDefinitionLink.parse(x));
    }
    return newInstance;
  }

  public static isGraphDefinitionLinkTarget(input?: unknown): input is GraphDefinitionLinkTarget {
    const castInput = input as GraphDefinitionLinkTarget;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GraphDefinitionLinkTarget";
  }

  public toJSON(): IGraphDefinitionLinkTarget {
    const result: IGraphDefinitionLinkTarget = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.params) {
      result.params = this.params.value;
      result._params = Extension.serializePrimitiveExtension(this.params);
    }

    if (this.profile) {
      result.profile = this.profile.value;
      result._profile = Extension.serializePrimitiveExtension(this.profile);
    }

    if (this.compartment) {
      result.compartment = this.compartment.map((x) => x.toJSON());
    }

    if (this.link) {
      result.link = this.link.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "GraphDefinitionLinkTarget";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
