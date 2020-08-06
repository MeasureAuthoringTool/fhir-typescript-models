/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class NamingSystemType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NamingSystemType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: NamingSystemType = new NamingSystemType()
  ): NamingSystemType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isNamingSystemType(input?: unknown): input is NamingSystemType {
    const castInput = input as NamingSystemType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NamingSystemType";
  }
  
  public getTypeName(): string {
    return "NamingSystemType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
