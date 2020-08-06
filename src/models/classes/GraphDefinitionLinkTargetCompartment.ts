/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CompartmentCode,
  Extension,
  GraphCompartmentRule,
  GraphCompartmentUse,
  IGraphDefinitionLinkTargetCompartment,
  PrimitiveString,
} from "../internal";

export class GraphDefinitionLinkTargetCompartment extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "GraphDefinition.Link.Target.Compartment";

  public use?: GraphCompartmentUse;

  public code?: CompartmentCode;

  public rule?: GraphCompartmentRule;

  public expression?: PrimitiveString;

  public description?: PrimitiveString;

  public static parse(
    json: IGraphDefinitionLinkTargetCompartment,
    providedInstance: GraphDefinitionLinkTargetCompartment = new GraphDefinitionLinkTargetCompartment()
  ): GraphDefinitionLinkTargetCompartment {
    const newInstance: GraphDefinitionLinkTargetCompartment = BackboneElement.parse(json, providedInstance);
  
    if (json.use) {
      newInstance.use = GraphCompartmentUse.parsePrimitive(json.use, json._use);
    }
    if (json.code) {
      newInstance.code = CompartmentCode.parsePrimitive(json.code, json._code);
    }
    if (json.rule) {
      newInstance.rule = GraphCompartmentRule.parsePrimitive(json.rule, json._rule);
    }
    if (json.expression) {
      newInstance.expression = PrimitiveString.parsePrimitive(json.expression, json._expression);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    return newInstance;
  }

  public static isGraphDefinitionLinkTargetCompartment(input?: unknown): input is GraphDefinitionLinkTargetCompartment {
    const castInput = input as GraphDefinitionLinkTargetCompartment;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GraphDefinitionLinkTargetCompartment";
  }

  public toJSON(): IGraphDefinitionLinkTargetCompartment {
    const result: IGraphDefinitionLinkTargetCompartment = super.toJSON();

    if (this.use) {
      result.use = this.use.value;
      result._use = Extension.serializePrimitiveExtension(this.use);
    }

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.rule) {
      result.rule = this.rule.value;
      result._rule = Extension.serializePrimitiveExtension(this.rule);
    }

    if (this.expression) {
      result.expression = this.expression.value;
      result._expression = Extension.serializePrimitiveExtension(this.expression);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "GraphDefinitionLinkTargetCompartment";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
