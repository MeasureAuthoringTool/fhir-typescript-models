/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  BindingStrength,
  Extension,
  FhirField,
  IOperationDefinitionParameterBinding,
  PrimitiveCanonical,
  FhirType
} from "../internal";

@FhirType("OperationDefinitionParameterBinding", "BackboneElement")
export class OperationDefinitionParameterBinding extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "OperationDefinition.Parameter.Binding";

  static readonly primaryCodePath: string | null = null;

  @FhirField("BindingStrength")
  public strength?: BindingStrength;

  @FhirField("PrimitiveCanonical")
  public valueSet?: PrimitiveCanonical;

  public static parse(
    json: IOperationDefinitionParameterBinding,
    providedInstance: OperationDefinitionParameterBinding = new OperationDefinitionParameterBinding()
  ): OperationDefinitionParameterBinding {
    const newInstance: OperationDefinitionParameterBinding = BackboneElement.parse(json, providedInstance);
  
    if (json.strength !== undefined) {
      newInstance.strength = BindingStrength.parsePrimitive(json.strength, json._strength);
    }
    if (json.valueSet !== undefined) {
      newInstance.valueSet = PrimitiveCanonical.parsePrimitive(json.valueSet, json._valueSet);
    }
    return newInstance;
  }

  public static isOperationDefinitionParameterBinding(input?: unknown): input is OperationDefinitionParameterBinding {
    const castInput = input as OperationDefinitionParameterBinding;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "OperationDefinitionParameterBinding";
  }

  public toJSON(): IOperationDefinitionParameterBinding {
    const result: IOperationDefinitionParameterBinding = super.toJSON();

    if (this.strength) {
      result.strength = this.strength.value;
      result._strength = Extension.serializePrimitiveExtension(this.strength);
    }

    if (this.valueSet) {
      result.valueSet = this.valueSet.value;
      result._valueSet = Extension.serializePrimitiveExtension(this.valueSet);
    }

    return result;
  }

  public clone(): OperationDefinitionParameterBinding {
    return OperationDefinitionParameterBinding.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "OperationDefinitionParameterBinding";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
