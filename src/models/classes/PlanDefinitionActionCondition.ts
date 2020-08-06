/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  ActionConditionKind,
  BackboneElement,
  Expression,
  Extension,
  IPlanDefinitionActionCondition,
} from "../internal";

export class PlanDefinitionActionCondition extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PlanDefinition.Action.Condition";

  public kind?: ActionConditionKind;

  public expression?: Expression;

  public static parse(
    json: IPlanDefinitionActionCondition,
    providedInstance: PlanDefinitionActionCondition = new PlanDefinitionActionCondition()
  ): PlanDefinitionActionCondition {
    const newInstance: PlanDefinitionActionCondition = BackboneElement.parse(json, providedInstance);
  
    if (json.kind) {
      newInstance.kind = ActionConditionKind.parsePrimitive(json.kind, json._kind);
    }
    if (json.expression) {
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
  
  public getTypeName(): string {
    return "PlanDefinitionActionCondition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
