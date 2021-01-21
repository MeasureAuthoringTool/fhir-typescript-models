/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  FhirList,
  ITestScriptSetup,
  TestScriptSetupAction,
  FhirType
} from "../internal";

@FhirType("TestScriptSetup", "BackboneElement")
export class TestScriptSetup extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Setup";

  static readonly primaryCodePath: string | null = null;

  @FhirList("TestScriptSetupAction")
  public action?: Array<TestScriptSetupAction>;

  public static parse(
    json: ITestScriptSetup,
    providedInstance: TestScriptSetup = new TestScriptSetup()
  ): TestScriptSetup {
    const newInstance: TestScriptSetup = BackboneElement.parse(json, providedInstance);
  
    if (json.action !== undefined) {
      newInstance.action = json.action.map((x) => TestScriptSetupAction.parse(x));
    }
    return newInstance;
  }

  public static isTestScriptSetup(input?: unknown): input is TestScriptSetup {
    const castInput = input as TestScriptSetup;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptSetup";
  }

  public toJSON(): ITestScriptSetup {
    const result: ITestScriptSetup = super.toJSON();

    if (this.action) {
      result.action = this.action.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): TestScriptSetup {
    return TestScriptSetup.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestScriptSetup";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
