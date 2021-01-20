/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("AssertionDirectionType", "PrimitiveCode")
export class AssertionDirectionType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AssertionDirectionType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: AssertionDirectionType = new AssertionDirectionType()
  ): AssertionDirectionType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isAssertionDirectionType(input?: unknown): input is AssertionDirectionType {
    const castInput = input as AssertionDirectionType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AssertionDirectionType";
  }

  public clone(): AssertionDirectionType {
    const result = new AssertionDirectionType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "AssertionDirectionType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
