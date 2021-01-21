/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ActionConditionKind", "PrimitiveCode")
export class ActionConditionKind extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActionConditionKind";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ActionConditionKind = new ActionConditionKind()
  ): ActionConditionKind {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isActionConditionKind(input?: unknown): input is ActionConditionKind {
    const castInput = input as ActionConditionKind;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ActionConditionKind";
  }

  public clone(): ActionConditionKind {
    const result = new ActionConditionKind();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ActionConditionKind";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
