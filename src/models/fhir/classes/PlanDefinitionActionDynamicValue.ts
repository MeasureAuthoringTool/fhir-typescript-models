/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Expression,
  Extension,
  FhirField,
  IPlanDefinitionActionDynamicValue,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("PlanDefinitionActionDynamicValue", "BackboneElement")
export class PlanDefinitionActionDynamicValue extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PlanDefinition.Action.DynamicValue";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public path?: PrimitiveString;

  @FhirField("Expression")
  public expression?: Expression;

  public static parse(
    json: IPlanDefinitionActionDynamicValue,
    providedInstance: PlanDefinitionActionDynamicValue = new PlanDefinitionActionDynamicValue()
  ): PlanDefinitionActionDynamicValue {
    const newInstance: PlanDefinitionActionDynamicValue = BackboneElement.parse(json, providedInstance);
  
    if (json.path !== undefined) {
      newInstance.path = PrimitiveString.parsePrimitive(json.path, json._path);
    }
    if (json.expression !== undefined) {
      newInstance.expression = Expression.parse(json.expression);
    }
    return newInstance;
  }

  public static isPlanDefinitionActionDynamicValue(input?: unknown): input is PlanDefinitionActionDynamicValue {
    const castInput = input as PlanDefinitionActionDynamicValue;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PlanDefinitionActionDynamicValue";
  }

  public toJSON(): IPlanDefinitionActionDynamicValue {
    const result: IPlanDefinitionActionDynamicValue = super.toJSON();

    if (this.path) {
      result.path = this.path.value;
      result._path = Extension.serializePrimitiveExtension(this.path);
    }

    if (this.expression) {
      result.expression = this.expression.toJSON();
    }

    return result;
  }

  public clone(): PlanDefinitionActionDynamicValue {
    return PlanDefinitionActionDynamicValue.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PlanDefinitionActionDynamicValue";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
