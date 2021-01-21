/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ContactPointUse", "PrimitiveCode")
export class ContactPointUse extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ContactPointUse";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ContactPointUse = new ContactPointUse()
  ): ContactPointUse {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isContactPointUse(input?: unknown): input is ContactPointUse {
    const castInput = input as ContactPointUse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContactPointUse";
  }

  public clone(): ContactPointUse {
    const result = new ContactPointUse();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ContactPointUse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
