/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BindingStrength,
  Element,
  Extension,
  FhirField,
  IElementDefinitionBinding,
  PrimitiveCanonical,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ElementDefinitionBinding", "Element")
export class ElementDefinitionBinding extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ElementDefinition.Binding";

  static readonly primaryCodePath: string | null = null;

  @FhirField("BindingStrength")
  public strength?: BindingStrength;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("PrimitiveCanonical")
  public valueSet?: PrimitiveCanonical;

  public static parse(
    json: IElementDefinitionBinding,
    providedInstance: ElementDefinitionBinding = new ElementDefinitionBinding()
  ): ElementDefinitionBinding {
    const newInstance: ElementDefinitionBinding = Element.parse(json, providedInstance);
  
    if (json.strength !== undefined) {
      newInstance.strength = BindingStrength.parsePrimitive(json.strength, json._strength);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.valueSet !== undefined) {
      newInstance.valueSet = PrimitiveCanonical.parsePrimitive(json.valueSet, json._valueSet);
    }
    return newInstance;
  }

  public static isElementDefinitionBinding(input?: unknown): input is ElementDefinitionBinding {
    const castInput = input as ElementDefinitionBinding;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ElementDefinitionBinding";
  }

  public toJSON(): IElementDefinitionBinding {
    const result: IElementDefinitionBinding = super.toJSON();

    if (this.strength) {
      result.strength = this.strength.value;
      result._strength = Extension.serializePrimitiveExtension(this.strength);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.valueSet) {
      result.valueSet = this.valueSet.value;
      result._valueSet = Extension.serializePrimitiveExtension(this.valueSet);
    }

    return result;
  }

  public clone(): ElementDefinitionBinding {
    return ElementDefinitionBinding.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ElementDefinitionBinding";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
