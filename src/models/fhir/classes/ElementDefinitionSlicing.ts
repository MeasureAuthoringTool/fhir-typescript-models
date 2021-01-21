/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  ElementDefinitionSlicingDiscriminator,
  Extension,
  FhirField,
  FhirList,
  IElementDefinitionSlicing,
  PrimitiveBoolean,
  PrimitiveString,
  SlicingRules,
  FhirType
} from "../internal";

@FhirType("ElementDefinitionSlicing", "Element")
export class ElementDefinitionSlicing extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ElementDefinition.Slicing";

  static readonly primaryCodePath: string | null = null;

  @FhirList("ElementDefinitionSlicingDiscriminator")
  public discriminator?: Array<ElementDefinitionSlicingDiscriminator>;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("PrimitiveBoolean")
  public ordered?: PrimitiveBoolean;

  @FhirField("SlicingRules")
  public rules?: SlicingRules;

  public static parse(
    json: IElementDefinitionSlicing,
    providedInstance: ElementDefinitionSlicing = new ElementDefinitionSlicing()
  ): ElementDefinitionSlicing {
    const newInstance: ElementDefinitionSlicing = Element.parse(json, providedInstance);
  
    if (json.discriminator !== undefined) {
      newInstance.discriminator = json.discriminator.map((x) => ElementDefinitionSlicingDiscriminator.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.ordered !== undefined) {
      newInstance.ordered = PrimitiveBoolean.parsePrimitive(json.ordered, json._ordered);
    }
    if (json.rules !== undefined) {
      newInstance.rules = SlicingRules.parsePrimitive(json.rules, json._rules);
    }
    return newInstance;
  }

  public static isElementDefinitionSlicing(input?: unknown): input is ElementDefinitionSlicing {
    const castInput = input as ElementDefinitionSlicing;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ElementDefinitionSlicing";
  }

  public toJSON(): IElementDefinitionSlicing {
    const result: IElementDefinitionSlicing = super.toJSON();

    if (this.discriminator) {
      result.discriminator = this.discriminator.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.ordered) {
      result.ordered = this.ordered.value;
      result._ordered = Extension.serializePrimitiveExtension(this.ordered);
    }

    if (this.rules) {
      result.rules = this.rules.value;
      result._rules = Extension.serializePrimitiveExtension(this.rules);
    }

    return result;
  }

  public clone(): ElementDefinitionSlicing {
    return ElementDefinitionSlicing.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ElementDefinitionSlicing";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
