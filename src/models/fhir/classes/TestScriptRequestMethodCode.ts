/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("TestScriptRequestMethodCode", "PrimitiveCode")
export class TestScriptRequestMethodCode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScriptRequestMethodCode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: TestScriptRequestMethodCode = new TestScriptRequestMethodCode()
  ): TestScriptRequestMethodCode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isTestScriptRequestMethodCode(input?: unknown): input is TestScriptRequestMethodCode {
    const castInput = input as TestScriptRequestMethodCode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScriptRequestMethodCode";
  }

  public clone(): TestScriptRequestMethodCode {
    const result = new TestScriptRequestMethodCode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "TestScriptRequestMethodCode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
