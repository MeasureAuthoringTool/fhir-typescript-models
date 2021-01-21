/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("VariableType", "PrimitiveCode")
export class VariableType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "VariableType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: VariableType = new VariableType()
  ): VariableType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isVariableType(input?: unknown): input is VariableType {
    const castInput = input as VariableType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "VariableType";
  }

  public clone(): VariableType {
    const result = new VariableType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "VariableType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
