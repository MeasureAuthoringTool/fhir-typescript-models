/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveInteger,
  FhirType
} from "../internal";

@FhirType("PrimitivePositiveInt", "PrimitiveInteger")
export class PrimitivePositiveInt extends PrimitiveInteger {
  static readonly baseType: string = "FHIR.integer";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "positiveInt";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveInteger.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveInteger.parsePrimitive>[1],
    providedInstance: PrimitivePositiveInt = new PrimitivePositiveInt()
  ): PrimitivePositiveInt {
      return PrimitiveInteger.parsePrimitive(value, extension, providedInstance);
  }

  public static isPrimitivePositiveInt(input?: unknown): input is PrimitivePositiveInt {
    const castInput = input as PrimitivePositiveInt;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitivePositiveInt";
  }

  public clone(): PrimitivePositiveInt {
    const result = new PrimitivePositiveInt();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitivePositiveInt";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
