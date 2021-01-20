/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  FhirField,
  ITestReportTeardownAction,
  TestReportSetupActionOperation,
  FhirType
} from "../internal";

@FhirType("TestReportTeardownAction", "BackboneElement")
export class TestReportTeardownAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReport.Teardown.Action";

  static readonly primaryCodePath: string | null = null;

  @FhirField("TestReportSetupActionOperation")
  public operation?: TestReportSetupActionOperation;

  public static parse(
    json: ITestReportTeardownAction,
    providedInstance: TestReportTeardownAction = new TestReportTeardownAction()
  ): TestReportTeardownAction {
    const newInstance: TestReportTeardownAction = BackboneElement.parse(json, providedInstance);
  
    if (json.operation !== undefined) {
      newInstance.operation = TestReportSetupActionOperation.parse(json.operation);
    }
    return newInstance;
  }

  public static isTestReportTeardownAction(input?: unknown): input is TestReportTeardownAction {
    const castInput = input as TestReportTeardownAction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestReportTeardownAction";
  }

  public toJSON(): ITestReportTeardownAction {
    const result: ITestReportTeardownAction = super.toJSON();

    if (this.operation) {
      result.operation = this.operation.toJSON();
    }

    return result;
  }

  public clone(): TestReportTeardownAction {
    return TestReportTeardownAction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestReportTeardownAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
