/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class TestReportStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReportStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: TestReportStatus = new TestReportStatus()
  ): TestReportStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isTestReportStatus(input?: unknown): input is TestReportStatus {
    const castInput = input as TestReportStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestReportStatus";
  }
  
  public getTypeName(): string {
    return "TestReportStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
