/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  ActionConditionKind,
  BackboneElement,
  Expression,
  Extension,
  FhirField,
  IPlanDefinitionActionCondition,
  FhirType
} from "../internal";

@FhirType("PlanDefinitionActionCondition", "BackboneElement")
export class PlanDefinitionActionCondition extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PlanDefinition.Action.Condition";

  static readonly primaryCodePath: string | null = null;

  @FhirField("ActionConditionKind")
  public kind?: ActionConditionKind;

  @FhirField("Expression")
  public expression?: Expression;

  public static parse(
    json: IPlanDefinitionActionCondition,
    providedInstance: PlanDefinitionActionCondition = new PlanDefinitionActionCondition()
  ): PlanDefinitionActionCondition {
    const newInstance: PlanDefinitionActionCondition = BackboneElement.parse(json, providedInstance);
  
    if (json.kind !== undefined) {
      newInstance.kind = ActionConditionKind.parsePrimitive(json.kind, json._kind);
    }
    if (json.expression !== undefined) {
      newInstance.expression = Expression.parse(json.expression);
    }
    return newInstance;
  }

  public static isPlanDefinitionActionCondition(input?: unknown): input is PlanDefinitionActionCondition {
    const castInput = input as PlanDefinitionActionCondition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PlanDefinitionActionCondition";
  }

  public toJSON(): IPlanDefinitionActionCondition {
    const result: IPlanDefinitionActionCondition = super.toJSON();

    if (this.kind) {
      result.kind = this.kind.value;
      result._kind = Extension.serializePrimitiveExtension(this.kind);
    }

    if (this.expression) {
      result.expression = this.expression.toJSON();
    }

    return result;
  }

  public clone(): PlanDefinitionActionCondition {
    return PlanDefinitionActionCondition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PlanDefinitionActionCondition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
