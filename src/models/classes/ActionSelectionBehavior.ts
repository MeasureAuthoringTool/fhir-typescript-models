/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ActionSelectionBehavior extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActionSelectionBehavior";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ActionSelectionBehavior = new ActionSelectionBehavior()
  ): ActionSelectionBehavior {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isActionSelectionBehavior(input?: unknown): input is ActionSelectionBehavior {
    const castInput = input as ActionSelectionBehavior;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ActionSelectionBehavior";
  }
  
  public getTypeName(): string {
    return "ActionSelectionBehavior";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
