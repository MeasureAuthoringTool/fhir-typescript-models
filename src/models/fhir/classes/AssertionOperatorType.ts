/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("AssertionOperatorType", "PrimitiveCode")
export class AssertionOperatorType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AssertionOperatorType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: AssertionOperatorType = new AssertionOperatorType()
  ): AssertionOperatorType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isAssertionOperatorType(input?: unknown): input is AssertionOperatorType {
    const castInput = input as AssertionOperatorType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AssertionOperatorType";
  }

  public clone(): AssertionOperatorType {
    const result = new AssertionOperatorType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "AssertionOperatorType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
