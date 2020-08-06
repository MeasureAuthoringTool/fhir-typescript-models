/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class TaskPriority extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TaskPriority";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: TaskPriority = new TaskPriority()
  ): TaskPriority {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isTaskPriority(input?: unknown): input is TaskPriority {
    const castInput = input as TaskPriority;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TaskPriority";
  }
  
  public getTypeName(): string {
    return "TaskPriority";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
