/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  ExtensionContextType,
  FhirField,
  IStructureDefinitionContext,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("StructureDefinitionContext", "BackboneElement")
export class StructureDefinitionContext extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureDefinition.Context";

  static readonly primaryCodePath: string | null = null;

  @FhirField("ExtensionContextType")
  public type?: ExtensionContextType;

  @FhirField("PrimitiveString")
  public expression?: PrimitiveString;

  public static parse(
    json: IStructureDefinitionContext,
    providedInstance: StructureDefinitionContext = new StructureDefinitionContext()
  ): StructureDefinitionContext {
    const newInstance: StructureDefinitionContext = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = ExtensionContextType.parsePrimitive(json.type, json._type);
    }
    if (json.expression !== undefined) {
      newInstance.expression = PrimitiveString.parsePrimitive(json.expression, json._expression);
    }
    return newInstance;
  }

  public static isStructureDefinitionContext(input?: unknown): input is StructureDefinitionContext {
    const castInput = input as StructureDefinitionContext;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureDefinitionContext";
  }

  public toJSON(): IStructureDefinitionContext {
    const result: IStructureDefinitionContext = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.expression) {
      result.expression = this.expression.value;
      result._expression = Extension.serializePrimitiveExtension(this.expression);
    }

    return result;
  }

  public clone(): StructureDefinitionContext {
    return StructureDefinitionContext.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "StructureDefinitionContext";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
