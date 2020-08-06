/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ActionPrecheckBehavior extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActionPrecheckBehavior";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ActionPrecheckBehavior = new ActionPrecheckBehavior()
  ): ActionPrecheckBehavior {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isActionPrecheckBehavior(input?: unknown): input is ActionPrecheckBehavior {
    const castInput = input as ActionPrecheckBehavior;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ActionPrecheckBehavior";
  }
  
  public getTypeName(): string {
    return "ActionPrecheckBehavior";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
