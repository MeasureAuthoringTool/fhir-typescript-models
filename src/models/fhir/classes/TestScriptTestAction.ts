/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  FhirField,
  ITestScriptTestAction,
  TestScriptSetupActionAssert,
  TestScriptSetupActionOperation,
  FhirType
} from "../internal";

@FhirType("TestScriptTestAction", "BackboneElement")
export class TestScriptTestAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Test.Action";

  static readonly primaryCodePath: string | null = null;

  @FhirField("TestScriptSetupActionOperation")
  public operation?: TestScriptSetupActionOperation;

  @FhirField("TestScriptSetupActionAssert")
  public assert?: TestScriptSetupActionAssert;

  public static parse(
    json: ITestScriptTestAction,
    providedInstance: TestScriptTestAction = new TestScriptTestAction()
  ): TestScriptTestAction {
    const newInstance: TestScriptTestAction = BackboneElement.parse(json, providedInstance);
  
    if (json.operation !== undefined) {
      newInstance.operation = TestScriptSetupActionOperation.parse(json.operation);
    }
    if (json.assert !== undefined) {
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

  public clone(): TestScriptTestAction {
    return TestScriptTestAction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestScriptTestAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
