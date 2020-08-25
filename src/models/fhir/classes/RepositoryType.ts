/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class RepositoryType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RepositoryType";

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
  
  public getTypeName(): string {
    return "RepositoryType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
