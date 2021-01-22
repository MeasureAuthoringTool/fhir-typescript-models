/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  FhirList,
  ITestReportSetup,
  TestReportSetupAction,
  FhirType
} from "../internal";

@FhirType("TestReportSetup", "BackboneElement")
export class TestReportSetup extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReport.Setup";

  static readonly primaryCodePath: string | null = null;

  @FhirList("TestReportSetupAction")
  public action?: Array<TestReportSetupAction>;

  public static parse(
    json: ITestReportSetup,
    providedInstance: TestReportSetup = new TestReportSetup()
  ): TestReportSetup {
    const newInstance: TestReportSetup = BackboneElement.parse(json, providedInstance);
  
    if (json.action !== undefined) {
      newInstance.action = json.action.map((x) => TestReportSetupAction.parse(x));
    }
    return newInstance;
  }

  public static isTestReportSetup(input?: unknown): input is TestReportSetup {
    const castInput = input as TestReportSetup;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestReportSetup";
  }

  public toJSON(): ITestReportSetup {
    const result: ITestReportSetup = super.toJSON();

    if (this.action) {
      result.action = this.action.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): TestReportSetup {
    return TestReportSetup.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestReportSetup";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
