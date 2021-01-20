/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  FhirField,
  ITestReportTestAction,
  TestReportSetupActionAssert,
  TestReportSetupActionOperation,
  FhirType
} from "../internal";

@FhirType("TestReportTestAction", "BackboneElement")
export class TestReportTestAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReport.Test.Action";

  static readonly primaryCodePath: string | null = null;

  @FhirField("TestReportSetupActionOperation")
  public operation?: TestReportSetupActionOperation;

  @FhirField("TestReportSetupActionAssert")
  public assert?: TestReportSetupActionAssert;

  public static parse(
    json: ITestReportTestAction,
    providedInstance: TestReportTestAction = new TestReportTestAction()
  ): TestReportTestAction {
    const newInstance: TestReportTestAction = BackboneElement.parse(json, providedInstance);
  
    if (json.operation !== undefined) {
      newInstance.operation = TestReportSetupActionOperation.parse(json.operation);
    }
    if (json.assert !== undefined) {
      newInstance.assert = TestReportSetupActionAssert.parse(json.assert);
    }
    return newInstance;
  }

  public static isTestReportTestAction(input?: unknown): input is TestReportTestAction {
    const castInput = input as TestReportTestAction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestReportTestAction";
  }

  public toJSON(): ITestReportTestAction {
    const result: ITestReportTestAction = super.toJSON();

    if (this.operation) {
      result.operation = this.operation.toJSON();
    }

    if (this.assert) {
      result.assert = this.assert.toJSON();
    }

    return result;
  }

  public clone(): TestReportTestAction {
    return TestReportTestAction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestReportTestAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
