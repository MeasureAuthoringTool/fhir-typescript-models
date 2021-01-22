/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("GoalLifecycleStatus", "PrimitiveCode")
export class GoalLifecycleStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "GoalLifecycleStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: GoalLifecycleStatus = new GoalLifecycleStatus()
  ): GoalLifecycleStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isGoalLifecycleStatus(input?: unknown): input is GoalLifecycleStatus {
    const castInput = input as GoalLifecycleStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GoalLifecycleStatus";
  }

  public clone(): GoalLifecycleStatus {
    const result = new GoalLifecycleStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "GoalLifecycleStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
