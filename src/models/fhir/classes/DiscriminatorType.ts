/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("DiscriminatorType", "PrimitiveCode")
export class DiscriminatorType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DiscriminatorType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DiscriminatorType = new DiscriminatorType()
  ): DiscriminatorType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDiscriminatorType(input?: unknown): input is DiscriminatorType {
    const castInput = input as DiscriminatorType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DiscriminatorType";
  }

  public clone(): DiscriminatorType {
    const result = new DiscriminatorType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "DiscriminatorType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
