/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class Status extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Status";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: Status = new Status()
  ): Status {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isStatus(input?: unknown): input is Status {
    const castInput = input as Status;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Status";
  }
  
  public getTypeName(): string {
    return "Status";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
