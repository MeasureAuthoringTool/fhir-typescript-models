/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class CodeSystemContentMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CodeSystemContentMode";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CodeSystemContentMode = new CodeSystemContentMode()
  ): CodeSystemContentMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCodeSystemContentMode(input?: unknown): input is CodeSystemContentMode {
    const castInput = input as CodeSystemContentMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CodeSystemContentMode";
  }
  
  public getTypeName(): string {
    return "CodeSystemContentMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
