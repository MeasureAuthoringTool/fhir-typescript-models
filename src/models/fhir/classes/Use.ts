/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("Use", "PrimitiveCode")
export class Use extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Use";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: Use = new Use()
  ): Use {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isUse(input?: unknown): input is Use {
    const castInput = input as Use;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Use";
  }

  public clone(): Use {
    const result = new Use();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "Use";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
