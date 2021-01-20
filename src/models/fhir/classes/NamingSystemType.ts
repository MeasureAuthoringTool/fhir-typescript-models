/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("NamingSystemType", "PrimitiveCode")
export class NamingSystemType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NamingSystemType";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): NamingSystemType {
    const result = new NamingSystemType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "NamingSystemType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
