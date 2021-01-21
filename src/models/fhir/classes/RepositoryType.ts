/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("RepositoryType", "PrimitiveCode")
export class RepositoryType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RepositoryType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: RepositoryType = new RepositoryType()
  ): RepositoryType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isRepositoryType(input?: unknown): input is RepositoryType {
    const castInput = input as RepositoryType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RepositoryType";
  }

  public clone(): RepositoryType {
    const result = new RepositoryType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "RepositoryType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
