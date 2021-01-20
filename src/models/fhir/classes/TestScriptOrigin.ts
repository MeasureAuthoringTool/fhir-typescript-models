/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  Extension,
  FhirField,
  ITestScriptOrigin,
  PrimitiveInteger,
  FhirType
} from "../internal";

@FhirType("TestScriptOrigin", "BackboneElement")
export class TestScriptOrigin extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Origin";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveInteger")
  public index?: PrimitiveInteger;

  @FhirField("Coding")
  public profile?: Coding;

  public static parse(
    json: ITestScriptOrigin,
    providedInstance: TestScriptOrigin = new TestScriptOrigin()
  ): TestScriptOrigin {
    const newInstance: TestScriptOrigin = BackboneElement.parse(json, providedInstance);
  
    if (json.index !== undefined) {
      newInstance.index = PrimitiveInteger.parsePrimitive(json.index, json._index);
    }
    if (json.profile !== undefined) {
      newInstance.profile = Coding.parse(json.profile);
    }
    return newInstance;
  }

  public static isTestScriptOrigin(input?: unknown): input is TestScriptOrigin {
    const castInput = input as TestScriptOrigin;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptOrigin";
  }

  public toJSON(): ITestScriptOrigin {
    const result: ITestScriptOrigin = super.toJSON();

    if (this.index) {
      result.index = this.index.value;
      result._index = Extension.serializePrimitiveExtension(this.index);
    }

    if (this.profile) {
      result.profile = this.profile.toJSON();
    }

    return result;
  }

  public clone(): TestScriptOrigin {
    return TestScriptOrigin.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestScriptOrigin";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
