/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("TaskIntent", "PrimitiveCode")
export class TaskIntent extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TaskIntent";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: TaskIntent = new TaskIntent()
  ): TaskIntent {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isTaskIntent(input?: unknown): input is TaskIntent {
    const castInput = input as TaskIntent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TaskIntent";
  }

  public clone(): TaskIntent {
    const result = new TaskIntent();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "TaskIntent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
