/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ITestReportSetupAction,
  TestReportSetupActionAssert,
  TestReportSetupActionOperation,
  FieldMetadata
} from "../internal";

export class TestReportSetupAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReport.Setup.Action";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "operation",
      fieldType: [TestReportSetupActionOperation],
      isArray: false
    }, {
      fieldName: "assert",
      fieldType: [TestReportSetupActionAssert],
      isArray: false
    }];
  }

  public operation?: TestReportSetupActionOperation;

  public assert?: TestReportSetupActionAssert;

  public static parse(
    json: ITestReportSetupAction,
    providedInstance: TestReportSetupAction = new TestReportSetupAction()
  ): TestReportSetupAction {
    const newInstance: TestReportSetupAction = BackboneElement.parse(json, providedInstance);
  
    if (json.operation !== undefined) {
      newInstance.operation = TestReportSetupActionOperation.parse(json.operation);
    }
    if (json.assert !== undefined) {
      newInstance.assert = TestReportSetupActionAssert.parse(json.assert);
    }
    return newInstance;
  }

  public static isTestReportSetupAction(input?: unknown): input is TestReportSetupAction {
    const castInput = input as TestReportSetupAction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestReportSetupAction";
  }

  public toJSON(): ITestReportSetupAction {
    const result: ITestReportSetupAction = super.toJSON();

    if (this.operation) {
      result.operation = this.operation.toJSON();
    }

    if (this.assert) {
      result.assert = this.assert.toJSON();
    }

    return result;
  }

  public clone(): TestReportSetupAction {
    return TestReportSetupAction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestReportSetupAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
