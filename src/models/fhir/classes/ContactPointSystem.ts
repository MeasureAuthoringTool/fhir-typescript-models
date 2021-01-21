/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ContactPointSystem", "PrimitiveCode")
export class ContactPointSystem extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ContactPointSystem";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ContactPointSystem = new ContactPointSystem()
  ): ContactPointSystem {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isContactPointSystem(input?: unknown): input is ContactPointSystem {
    const castInput = input as ContactPointSystem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContactPointSystem";
  }

  public clone(): ContactPointSystem {
    const result = new ContactPointSystem();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ContactPointSystem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
