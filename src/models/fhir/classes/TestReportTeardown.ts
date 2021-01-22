/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  FhirList,
  ITestReportTeardown,
  TestReportTeardownAction,
  FhirType
} from "../internal";

@FhirType("TestReportTeardown", "BackboneElement")
export class TestReportTeardown extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReport.Teardown";

  static readonly primaryCodePath: string | null = null;

  @FhirList("TestReportTeardownAction")
  public action?: Array<TestReportTeardownAction>;

  public static parse(
    json: ITestReportTeardown,
    providedInstance: TestReportTeardown = new TestReportTeardown()
  ): TestReportTeardown {
    const newInstance: TestReportTeardown = BackboneElement.parse(json, providedInstance);
  
    if (json.action !== undefined) {
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

  public clone(): TestReportTeardown {
    return TestReportTeardown.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestReportTeardown";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
