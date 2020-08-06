/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ITestReportTeardown,
  TestReportTeardownAction,
} from "../internal";

export class TestReportTeardown extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReport.Teardown";

  public action?: Array<TestReportTeardownAction>;

  public static parse(
    json: ITestReportTeardown,
    providedInstance: TestReportTeardown = new TestReportTeardown()
  ): TestReportTeardown {
    const newInstance: TestReportTeardown = BackboneElement.parse(json, providedInstance);
  
    if (json.action) {
      newInstance.action = json.action.map((x) => TestReportTeardownAction.parse(x));
    }
    return newInstance;
  }

  public static isTestReportTeardown(input?: unknown): input is TestReportTeardown {
    const castInput = input as TestReportTeardown;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestReportTeardown";
  }

  public toJSON(): ITestReportTeardown {
    const result: ITestReportTeardown = super.toJSON();

    if (this.action) {
      result.action = this.action.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TestReportTeardown";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
