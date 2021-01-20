/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("TestReportResult", "PrimitiveCode")
export class TestReportResult extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReportResult";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: TestReportResult = new TestReportResult()
  ): TestReportResult {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isTestReportResult(input?: unknown): input is TestReportResult {
    const castInput = input as TestReportResult;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestReportResult";
  }

  public clone(): TestReportResult {
    const result = new TestReportResult();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "TestReportResult";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
