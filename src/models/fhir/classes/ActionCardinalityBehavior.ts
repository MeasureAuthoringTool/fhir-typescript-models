/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ActionCardinalityBehavior", "PrimitiveCode")
export class ActionCardinalityBehavior extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActionCardinalityBehavior";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): ActionCardinalityBehavior {
    const result = new ActionCardinalityBehavior();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ActionCardinalityBehavior";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
