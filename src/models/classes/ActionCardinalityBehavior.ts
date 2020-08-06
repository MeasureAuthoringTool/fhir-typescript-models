/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ActionCardinalityBehavior extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActionCardinalityBehavior";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ActionCardinalityBehavior = new ActionCardinalityBehavior()
  ): ActionCardinalityBehavior {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isActionCardinalityBehavior(input?: unknown): input is ActionCardinalityBehavior {
    const castInput = input as ActionCardinalityBehavior;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ActionCardinalityBehavior";
  }
  
  public getTypeName(): string {
    return "ActionCardinalityBehavior";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
