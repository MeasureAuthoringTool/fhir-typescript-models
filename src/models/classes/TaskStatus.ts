/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class TaskStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TaskStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: TaskStatus = new TaskStatus()
  ): TaskStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isTaskStatus(input?: unknown): input is TaskStatus {
    const castInput = input as TaskStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TaskStatus";
  }
  
  public getTypeName(): string {
    return "TaskStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
