/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ITestScriptTeardownAction,
  TestScriptSetupActionOperation,
} from "../internal";

export class TestScriptTeardownAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Teardown.Action";

  public operation?: TestScriptSetupActionOperation;

  public static parse(
    json: ITestScriptTeardownAction,
    providedInstance: TestScriptTeardownAction = new TestScriptTeardownAction()
  ): TestScriptTeardownAction {
    const newInstance: TestScriptTeardownAction = BackboneElement.parse(json, providedInstance);
  
    if (json.operation !== undefined) {
      newInstance.operation = TestScriptSetupActionOperation.parse(json.operation);
    }
    return newInstance;
  }

  public static isTestScriptTeardownAction(input?: unknown): input is TestScriptTeardownAction {
    const castInput = input as TestScriptTeardownAction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptTeardownAction";
  }

  public toJSON(): ITestScriptTeardownAction {
    const result: ITestScriptTeardownAction = super.toJSON();

    if (this.operation) {
      result.operation = this.operation.toJSON();
    }

    return result;
  }

  public clone(): TestScriptTeardownAction {
    return TestScriptTeardownAction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestScriptTeardownAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
