/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IImplementationGuideDefinitionGrouping,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ImplementationGuideDefinitionGrouping", "BackboneElement")
export class ImplementationGuideDefinitionGrouping extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide.Definition.Grouping";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  public static parse(
    json: IImplementationGuideDefinitionGrouping,
    providedInstance: ImplementationGuideDefinitionGrouping = new ImplementationGuideDefinitionGrouping()
  ): ImplementationGuideDefinitionGrouping {
    const newInstance: ImplementationGuideDefinitionGrouping = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.description !== undefined) {
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

  public clone(): ImplementationGuideDefinitionGrouping {
    return ImplementationGuideDefinitionGrouping.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImplementationGuideDefinitionGrouping";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
