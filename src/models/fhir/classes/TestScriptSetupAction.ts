/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ITestScriptSetupAction,
  TestScriptSetupActionAssert,
  TestScriptSetupActionOperation,
  FieldMetadata
} from "../internal";

export class TestScriptSetupAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Setup.Action";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "operation",
      fieldType: [TestScriptSetupActionOperation],
      isArray: false
    }, {
      fieldName: "assert",
      fieldType: [TestScriptSetupActionAssert],
      isArray: false
    }];
  }

  public operation?: TestScriptSetupActionOperation;

  public assert?: TestScriptSetupActionAssert;

  public static parse(
    json: ITestScriptSetupAction,
    providedInstance: TestScriptSetupAction = new TestScriptSetupAction()
  ): TestScriptSetupAction {
    const newInstance: TestScriptSetupAction = BackboneElement.parse(json, providedInstance);
  
    if (json.operation !== undefined) {
      newInstance.operation = TestScriptSetupActionOperation.parse(json.operation);
    }
    if (json.assert !== undefined) {
      newInstance.assert = TestScriptSetupActionAssert.parse(json.assert);
    }
    return newInstance;
  }

  public static isTestScriptSetupAction(input?: unknown): input is TestScriptSetupAction {
    const castInput = input as TestScriptSetupAction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptSetupAction";
  }

  public toJSON(): ITestScriptSetupAction {
    const result: ITestScriptSetupAction = super.toJSON();

    if (this.operation) {
      result.operation = this.operation.toJSON();
    }

    if (this.assert) {
      result.assert = this.assert.toJSON();
    }

    return result;
  }

  public clone(): TestScriptSetupAction {
    return TestScriptSetupAction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestScriptSetupAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
