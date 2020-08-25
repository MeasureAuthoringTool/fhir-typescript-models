/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class TestReportActionResult extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReportActionResult";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: TestReportActionResult = new TestReportActionResult()
  ): TestReportActionResult {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isTestReportActionResult(input?: unknown): input is TestReportActionResult {
    const castInput = input as TestReportActionResult;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestReportActionResult";
  }
  
  public getTypeName(): string {
    return "TestReportActionResult";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
