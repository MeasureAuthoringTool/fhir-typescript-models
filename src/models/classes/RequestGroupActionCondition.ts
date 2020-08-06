/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  ActionConditionKind,
  BackboneElement,
  Expression,
  Extension,
  IRequestGroupActionCondition,
} from "../internal";

export class RequestGroupActionCondition extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RequestGroup.Action.Condition";

  public kind?: ActionConditionKind;

  public expression?: Expression;

  public static parse(
    json: IRequestGroupActionCondition,
    providedInstance: RequestGroupActionCondition = new RequestGroupActionCondition()
  ): RequestGroupActionCondition {
    const newInstance: RequestGroupActionCondition = BackboneElement.parse(json, providedInstance);
  
    if (json.kind) {
      newInstance.kind = ActionConditionKind.parsePrimitive(json.kind, json._kind);
    }
    if (json.expression) {
      newInstance.expression = Expression.parse(json.expression);
    }
    return newInstance;
  }

  public static isRequestGroupActionCondition(input?: unknown): input is RequestGroupActionCondition {
    const castInput = input as RequestGroupActionCondition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RequestGroupActionCondition";
  }

  public toJSON(): IRequestGroupActionCondition {
    const result: IRequestGroupActionCondition = super.toJSON();

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
    return "RequestGroupActionCondition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
