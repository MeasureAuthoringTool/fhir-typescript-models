/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class OperationKind extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "OperationKind";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: OperationKind = new OperationKind()
  ): OperationKind {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isOperationKind(input?: unknown): input is OperationKind {
    const castInput = input as OperationKind;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "OperationKind";
  }
  
  public getTypeName(): string {
    return "OperationKind";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
