/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class CodeSearchSupport extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CodeSearchSupport";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CodeSearchSupport = new CodeSearchSupport()
  ): CodeSearchSupport {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCodeSearchSupport(input?: unknown): input is CodeSearchSupport {
    const castInput = input as CodeSearchSupport;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CodeSearchSupport";
  }
  
  public getTypeName(): string {
    return "CodeSearchSupport";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
