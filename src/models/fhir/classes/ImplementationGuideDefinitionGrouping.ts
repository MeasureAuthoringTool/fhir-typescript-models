/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IImplementationGuideDefinitionGrouping,
  PrimitiveString,
} from "../internal";

export class ImplementationGuideDefinitionGrouping extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide.Definition.Grouping";

  public name?: PrimitiveString;

  public description?: PrimitiveString;

  public static parse(
    json: IImplementationGuideDefinitionGrouping,
    providedInstance: ImplementationGuideDefinitionGrouping = new ImplementationGuideDefinitionGrouping()
  ): ImplementationGuideDefinitionGrouping {
    const newInstance: ImplementationGuideDefinitionGrouping = BackboneElement.parse(json, providedInstance);
  
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    return newInstance;
  }

  public static isImplementationGuideDefinitionGrouping(input?: unknown): input is ImplementationGuideDefinitionGrouping {
    const castInput = input as ImplementationGuideDefinitionGrouping;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImplementationGuideDefinitionGrouping";
  }

  public toJSON(): IImplementationGuideDefinitionGrouping {
    const result: IImplementationGuideDefinitionGrouping = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ImplementationGuideDefinitionGrouping";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
