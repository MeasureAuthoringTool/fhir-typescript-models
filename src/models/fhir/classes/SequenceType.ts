/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("SequenceType", "PrimitiveCode")
export class SequenceType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SequenceType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SequenceType = new SequenceType()
  ): SequenceType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSequenceType(input?: unknown): input is SequenceType {
    const castInput = input as SequenceType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SequenceType";
  }

  public clone(): SequenceType {
    const result = new SequenceType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "SequenceType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
