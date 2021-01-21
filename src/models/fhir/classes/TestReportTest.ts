/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  ITestReportTest,
  PrimitiveString,
  TestReportTestAction,
  FhirType
} from "../internal";

@FhirType("TestReportTest", "BackboneElement")
export class TestReportTest extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestReport.Test";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirList("TestReportTestAction")
  public action?: Array<TestReportTestAction>;

  public static parse(
    json: ITestReportTest,
    providedInstance: TestReportTest = new TestReportTest()
  ): TestReportTest {
    const newInstance: TestReportTest = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.action !== undefined) {
      newInstance.action = json.action.map((x) => TestReportTestAction.parse(x));
    }
    return newInstance;
  }

  public static isTestReportTest(input?: unknown): input is TestReportTest {
    const castInput = input as TestReportTest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestReportTest";
  }

  public toJSON(): ITestReportTest {
    const result: ITestReportTest = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.action) {
      result.action = this.action.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): TestReportTest {
    return TestReportTest.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestReportTest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
