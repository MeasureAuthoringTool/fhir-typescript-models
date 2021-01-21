/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  FhirList,
  ITestScriptTeardown,
  TestScriptTeardownAction,
  FhirType
} from "../internal";

@FhirType("TestScriptTeardown", "BackboneElement")
export class TestScriptTeardown extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Teardown";

  static readonly primaryCodePath: string | null = null;

  @FhirList("TestScriptTeardownAction")
  public action?: Array<TestScriptTeardownAction>;

  public static parse(
    json: ITestScriptTeardown,
    providedInstance: TestScriptTeardown = new TestScriptTeardown()
  ): TestScriptTeardown {
    const newInstance: TestScriptTeardown = BackboneElement.parse(json, providedInstance);
  
    if (json.action !== undefined) {
      newInstance.action = json.action.map((x) => TestScriptTeardownAction.parse(x));
    }
    return newInstance;
  }

  public static isTestScriptTeardown(input?: unknown): input is TestScriptTeardown {
    const castInput = input as TestScriptTeardown;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptTeardown";
  }

  public toJSON(): ITestScriptTeardown {
    const result: ITestScriptTeardown = super.toJSON();

    if (this.action) {
      result.action = this.action.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): TestScriptTeardown {
    return TestScriptTeardown.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestScriptTeardown";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
