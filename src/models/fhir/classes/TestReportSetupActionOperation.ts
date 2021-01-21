/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  ITestReportSetupActionOperation,
  PrimitiveMarkdown,
  PrimitiveUri,
  TestReportActionResult,
  FhirType
} from "../internal";

@FhirType("TestReportSetupActionOperation", "BackboneElement")
export class TestReportSetupActionOperation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReport.Setup.Action.Operation";

  static readonly primaryCodePath: string | null = null;

  @FhirField("TestReportActionResult")
  public result?: TestReportActionResult;

  @FhirField("PrimitiveMarkdown")
  public message?: PrimitiveMarkdown;

  @FhirField("PrimitiveUri")
  public detail?: PrimitiveUri;

  public static parse(
    json: ITestReportSetupActionOperation,
    providedInstance: TestReportSetupActionOperation = new TestReportSetupActionOperation()
  ): TestReportSetupActionOperation {
    const newInstance: TestReportSetupActionOperation = BackboneElement.parse(json, providedInstance);
  
    if (json.result !== undefined) {
      newInstance.result = TestReportActionResult.parsePrimitive(json.result, json._result);
    }
    if (json.message !== undefined) {
      newInstance.message = PrimitiveMarkdown.parsePrimitive(json.message, json._message);
    }
    if (json.detail !== undefined) {
      newInstance.detail = PrimitiveUri.parsePrimitive(json.detail, json._detail);
    }
    return newInstance;
  }

  public static isTestReportSetupActionOperation(input?: unknown): input is TestReportSetupActionOperation {
    const castInput = input as TestReportSetupActionOperation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestReportSetupActionOperation";
  }

  public toJSON(): ITestReportSetupActionOperation {
    const result: ITestReportSetupActionOperation = super.toJSON();

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

  public clone(): TestReportSetupActionOperation {
    return TestReportSetupActionOperation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestReportSetupActionOperation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
