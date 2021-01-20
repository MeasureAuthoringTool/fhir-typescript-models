/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("NameUse", "PrimitiveCode")
export class NameUse extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NameUse";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: NameUse = new NameUse()
  ): NameUse {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isNameUse(input?: unknown): input is NameUse {
    const castInput = input as NameUse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NameUse";
  }

  public clone(): NameUse {
    const result = new NameUse();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "NameUse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
