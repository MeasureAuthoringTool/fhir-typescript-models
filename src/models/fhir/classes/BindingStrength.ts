/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("BindingStrength", "PrimitiveCode")
export class BindingStrength extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BindingStrength";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: BindingStrength = new BindingStrength()
  ): BindingStrength {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isBindingStrength(input?: unknown): input is BindingStrength {
    const castInput = input as BindingStrength;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BindingStrength";
  }

  public clone(): BindingStrength {
    const result = new BindingStrength();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "BindingStrength";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
