/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ITestScriptTest,
  PrimitiveString,
  TestScriptTestAction,
} from "../internal";

export class TestScriptTest extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Test";

  public name?: PrimitiveString;

  public description?: PrimitiveString;

  public action?: Array<TestScriptTestAction>;

  public static parse(
    json: ITestScriptTest,
    providedInstance: TestScriptTest = new TestScriptTest()
  ): TestScriptTest {
    const newInstance: TestScriptTest = BackboneElement.parse(json, providedInstance);
  
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.action) {
      newInstance.action = json.action.map((x) => TestScriptTestAction.parse(x));
    }
    return newInstance;
  }

  public static isTestScriptTest(input?: unknown): input is TestScriptTest {
    const castInput = input as TestScriptTest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptTest";
  }

  public toJSON(): ITestScriptTest {
    const result: ITestScriptTest = super.toJSON();

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
  
  public getTypeName(): string {
    return "TestScriptTest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
