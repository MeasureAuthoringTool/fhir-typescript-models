/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ActionRequiredBehavior extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActionRequiredBehavior";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ActionRequiredBehavior = new ActionRequiredBehavior()
  ): ActionRequiredBehavior {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isActionRequiredBehavior(input?: unknown): input is ActionRequiredBehavior {
    const castInput = input as ActionRequiredBehavior;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ActionRequiredBehavior";
  }
  
  public getTypeName(): string {
    return "ActionRequiredBehavior";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
