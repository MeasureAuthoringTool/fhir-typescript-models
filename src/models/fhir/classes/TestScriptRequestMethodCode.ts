/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class TestScriptRequestMethodCode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScriptRequestMethodCode";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: TestScriptRequestMethodCode = new TestScriptRequestMethodCode()
  ): TestScriptRequestMethodCode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isTestScriptRequestMethodCode(input?: unknown): input is TestScriptRequestMethodCode {
    const castInput = input as TestScriptRequestMethodCode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptRequestMethodCode";
  }
  
  public getTypeName(): string {
    return "TestScriptRequestMethodCode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
