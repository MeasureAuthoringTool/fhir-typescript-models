/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ParameterUse", "PrimitiveCode")
export class ParameterUse extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ParameterUse";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ParameterUse = new ParameterUse()
  ): ParameterUse {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isParameterUse(input?: unknown): input is ParameterUse {
    const castInput = input as ParameterUse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ParameterUse";
  }

  public clone(): ParameterUse {
    const result = new ParameterUse();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ParameterUse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
