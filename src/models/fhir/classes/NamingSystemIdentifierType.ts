/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("NamingSystemIdentifierType", "PrimitiveCode")
export class NamingSystemIdentifierType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NamingSystemIdentifierType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: NamingSystemIdentifierType = new NamingSystemIdentifierType()
  ): NamingSystemIdentifierType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isNamingSystemIdentifierType(input?: unknown): input is NamingSystemIdentifierType {
    const castInput = input as NamingSystemIdentifierType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NamingSystemIdentifierType";
  }

  public clone(): NamingSystemIdentifierType {
    const result = new NamingSystemIdentifierType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "NamingSystemIdentifierType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
