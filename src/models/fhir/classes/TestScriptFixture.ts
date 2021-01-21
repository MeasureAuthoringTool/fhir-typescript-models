/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  ITestScriptFixture,
  PrimitiveBoolean,
  Reference,
  FhirType
} from "../internal";

@FhirType("TestScriptFixture", "BackboneElement")
export class TestScriptFixture extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Fixture";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveBoolean")
  public autocreate?: PrimitiveBoolean;

  @FhirField("PrimitiveBoolean")
  public autodelete?: PrimitiveBoolean;

  @FhirField("Reference")
  public resource?: Reference;

  public static parse(
    json: ITestScriptFixture,
    providedInstance: TestScriptFixture = new TestScriptFixture()
  ): TestScriptFixture {
    const newInstance: TestScriptFixture = BackboneElement.parse(json, providedInstance);
  
    if (json.autocreate !== undefined) {
      newInstance.autocreate = PrimitiveBoolean.parsePrimitive(json.autocreate, json._autocreate);
    }
    if (json.autodelete !== undefined) {
      newInstance.autodelete = PrimitiveBoolean.parsePrimitive(json.autodelete, json._autodelete);
    }
    if (json.resource !== undefined) {
      newInstance.resource = Reference.parse(json.resource);
    }
    return newInstance;
  }

  public static isTestScriptFixture(input?: unknown): input is TestScriptFixture {
    const castInput = input as TestScriptFixture;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptFixture";
  }

  public toJSON(): ITestScriptFixture {
    const result: ITestScriptFixture = super.toJSON();

    if (this.autocreate) {
      result.autocreate = this.autocreate.value;
      result._autocreate = Extension.serializePrimitiveExtension(this.autocreate);
    }

    if (this.autodelete) {
      result.autodelete = this.autodelete.value;
      result._autodelete = Extension.serializePrimitiveExtension(this.autodelete);
    }

    if (this.resource) {
      result.resource = this.resource.toJSON();
    }

    return result;
  }

  public clone(): TestScriptFixture {
    return TestScriptFixture.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestScriptFixture";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
