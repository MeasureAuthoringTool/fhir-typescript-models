/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("IdentityAssuranceLevel", "PrimitiveCode")
export class IdentityAssuranceLevel extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "IdentityAssuranceLevel";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: IdentityAssuranceLevel = new IdentityAssuranceLevel()
  ): IdentityAssuranceLevel {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isIdentityAssuranceLevel(input?: unknown): input is IdentityAssuranceLevel {
    const castInput = input as IdentityAssuranceLevel;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "IdentityAssuranceLevel";
  }

  public clone(): IdentityAssuranceLevel {
    const result = new IdentityAssuranceLevel();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "IdentityAssuranceLevel";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
