/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ITestReportTestAction,
  TestReportSetupActionAssert,
  TestReportSetupActionOperation,
} from "../internal";

export class TestReportTestAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReport.Test.Action";

  public operation?: TestReportSetupActionOperation;

  public assert?: TestReportSetupActionAssert;

  public static parse(
    json: ITestReportTestAction,
    providedInstance: TestReportTestAction = new TestReportTestAction()
  ): TestReportTestAction {
    const newInstance: TestReportTestAction = BackboneElement.parse(json, providedInstance);
  
    if (json.operation) {
      newInstance.operation = TestReportSetupActionOperation.parse(json.operation);
    }
    if (json.assert) {
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
  
  public getTypeName(): string {
    return "TestReportTestAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
