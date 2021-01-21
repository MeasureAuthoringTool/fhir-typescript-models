/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  Extension,
  FhirField,
  IElementDefinitionBase,
  PrimitiveString,
  PrimitiveUnsignedInt,
  FhirType
} from "../internal";

@FhirType("ElementDefinitionBase", "Element")
export class ElementDefinitionBase extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ElementDefinition.Base";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public path?: PrimitiveString;

  @FhirField("PrimitiveUnsignedInt")
  public min?: PrimitiveUnsignedInt;

  @FhirField("PrimitiveString")
  public max?: PrimitiveString;

  public static parse(
    json: IElementDefinitionBase,
    providedInstance: ElementDefinitionBase = new ElementDefinitionBase()
  ): ElementDefinitionBase {
    const newInstance: ElementDefinitionBase = Element.parse(json, providedInstance);
  
    if (json.path !== undefined) {
      newInstance.path = PrimitiveString.parsePrimitive(json.path, json._path);
    }
    if (json.min !== undefined) {
      newInstance.min = PrimitiveUnsignedInt.parsePrimitive(json.min, json._min);
    }
    if (json.max !== undefined) {
      newInstance.max = PrimitiveString.parsePrimitive(json.max, json._max);
    }
    return newInstance;
  }

  public static isElementDefinitionBase(input?: unknown): input is ElementDefinitionBase {
    const castInput = input as ElementDefinitionBase;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ElementDefinitionBase";
  }

  public toJSON(): IElementDefinitionBase {
    const result: IElementDefinitionBase = super.toJSON();

    if (this.path) {
      result.path = this.path.value;
      result._path = Extension.serializePrimitiveExtension(this.path);
    }

    if (this.min) {
      result.min = this.min.value;
      result._min = Extension.serializePrimitiveExtension(this.min);
    }

    if (this.max) {
      result.max = this.max.value;
      result._max = Extension.serializePrimitiveExtension(this.max);
    }

    return result;
  }

  public clone(): ElementDefinitionBase {
    return ElementDefinitionBase.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ElementDefinitionBase";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
