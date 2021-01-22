/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  ITestReportSetupActionAssert,
  PrimitiveMarkdown,
  PrimitiveString,
  TestReportActionResult,
  FhirType
} from "../internal";

@FhirType("TestReportSetupActionAssert", "BackboneElement")
export class TestReportSetupActionAssert extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReport.Setup.Action.Assert";

  static readonly primaryCodePath: string | null = null;

  @FhirField("TestReportActionResult")
  public result?: TestReportActionResult;

  @FhirField("PrimitiveMarkdown")
  public message?: PrimitiveMarkdown;

  @FhirField("PrimitiveString")
  public detail?: PrimitiveString;

  public static parse(
    json: ITestReportSetupActionAssert,
    providedInstance: TestReportSetupActionAssert = new TestReportSetupActionAssert()
  ): TestReportSetupActionAssert {
    const newInstance: TestReportSetupActionAssert = BackboneElement.parse(json, providedInstance);
  
    if (json.result !== undefined) {
      newInstance.result = TestReportActionResult.parsePrimitive(json.result, json._result);
    }
    if (json.message !== undefined) {
      newInstance.message = PrimitiveMarkdown.parsePrimitive(json.message, json._message);
    }
    if (json.detail !== undefined) {
      newInstance.detail = PrimitiveString.parsePrimitive(json.detail, json._detail);
    }
    return newInstance;
  }

  public static isTestReportSetupActionAssert(input?: unknown): input is TestReportSetupActionAssert {
    const castInput = input as TestReportSetupActionAssert;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestReportSetupActionAssert";
  }

  public toJSON(): ITestReportSetupActionAssert {
    const result: ITestReportSetupActionAssert = super.toJSON();

    if (this.result) {
      result.result = this.result.value;
      result._result = Extension.serializePrimitiveExtension(this.result);
    }

    if (this.message) {
      result.message = this.message.value;
      result._message = Extension.serializePrimitiveExtension(this.message);
    }

    if (this.detail) {
      result.detail = this.detail.value;
      result._detail = Extension.serializePrimitiveExtension(this.detail);
    }

    return result;
  }

  public clone(): TestReportSetupActionAssert {
    return TestReportSetupActionAssert.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestReportSetupActionAssert";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
