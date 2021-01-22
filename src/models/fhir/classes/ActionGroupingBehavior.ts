/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ActionGroupingBehavior", "PrimitiveCode")
export class ActionGroupingBehavior extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActionGroupingBehavior";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ActionGroupingBehavior = new ActionGroupingBehavior()
  ): ActionGroupingBehavior {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isActionGroupingBehavior(input?: unknown): input is ActionGroupingBehavior {
    const castInput = input as ActionGroupingBehavior;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ActionGroupingBehavior";
  }

  public clone(): ActionGroupingBehavior {
    const result = new ActionGroupingBehavior();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ActionGroupingBehavior";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
