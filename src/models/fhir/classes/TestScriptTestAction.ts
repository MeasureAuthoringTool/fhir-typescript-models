/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ITestScriptTestAction,
  TestScriptSetupActionAssert,
  TestScriptSetupActionOperation,
} from "../internal";

export class TestScriptTestAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Test.Action";

  public operation?: TestScriptSetupActionOperation;

  public assert?: TestScriptSetupActionAssert;

  public static parse(
    json: ITestScriptTestAction,
    providedInstance: TestScriptTestAction = new TestScriptTestAction()
  ): TestScriptTestAction {
    const newInstance: TestScriptTestAction = BackboneElement.parse(json, providedInstance);
  
    if (json.operation) {
      newInstance.operation = TestScriptSetupActionOperation.parse(json.operation);
    }
    if (json.assert) {
      newInstance.assert = TestScriptSetupActionAssert.parse(json.assert);
    }
    return newInstance;
  }

  public static isTestScriptTestAction(input?: unknown): input is TestScriptTestAction {
    const castInput = input as TestScriptTestAction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptTestAction";
  }

  public toJSON(): ITestScriptTestAction {
    const result: ITestScriptTestAction = super.toJSON();

    if (this.operation) {
      result.operation = this.operation.toJSON();
    }

    if (this.assert) {
      result.assert = this.assert.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TestScriptTestAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
