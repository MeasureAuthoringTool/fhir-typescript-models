/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  Extension,
  FhirField,
  ITestScriptDestination,
  PrimitiveInteger,
  FhirType
} from "../internal";

@FhirType("TestScriptDestination", "BackboneElement")
export class TestScriptDestination extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript.Destination";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveInteger")
  public index?: PrimitiveInteger;

  @FhirField("Coding")
  public profile?: Coding;

  public static parse(
    json: ITestScriptDestination,
    providedInstance: TestScriptDestination = new TestScriptDestination()
  ): TestScriptDestination {
    const newInstance: TestScriptDestination = BackboneElement.parse(json, providedInstance);
  
    if (json.index !== undefined) {
      newInstance.index = PrimitiveInteger.parsePrimitive(json.index, json._index);
    }
    if (json.profile !== undefined) {
      newInstance.profile = Coding.parse(json.profile);
    }
    return newInstance;
  }

  public static isTestScriptDestination(input?: unknown): input is TestScriptDestination {
    const castInput = input as TestScriptDestination;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptDestination";
  }

  public toJSON(): ITestScriptDestination {
    const result: ITestScriptDestination = super.toJSON();

    if (this.index) {
      result.index = this.index.value;
      result._index = Extension.serializePrimitiveExtension(this.index);
    }

    if (this.profile) {
      result.profile = this.profile.toJSON();
    }

    return result;
  }

  public clone(): TestScriptDestination {
    return TestScriptDestination.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestScriptDestination";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
