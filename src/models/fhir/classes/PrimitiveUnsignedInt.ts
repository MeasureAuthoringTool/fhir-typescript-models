/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveInteger,
  FhirType
} from "../internal";

@FhirType("PrimitiveUnsignedInt", "PrimitiveInteger")
export class PrimitiveUnsignedInt extends PrimitiveInteger {
  static readonly baseType: string = "FHIR.integer";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "unsignedInt";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveInteger.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveInteger.parsePrimitive>[1],
    providedInstance: PrimitiveUnsignedInt = new PrimitiveUnsignedInt()
  ): PrimitiveUnsignedInt {
      return PrimitiveInteger.parsePrimitive(value, extension, providedInstance);
  }

  public static isPrimitiveUnsignedInt(input?: unknown): input is PrimitiveUnsignedInt {
    const castInput = input as PrimitiveUnsignedInt;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveUnsignedInt";
  }

  public clone(): PrimitiveUnsignedInt {
    const result = new PrimitiveUnsignedInt();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveUnsignedInt";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
