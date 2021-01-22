/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("IssueSeverity", "PrimitiveCode")
export class IssueSeverity extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "IssueSeverity";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: IssueSeverity = new IssueSeverity()
  ): IssueSeverity {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isIssueSeverity(input?: unknown): input is IssueSeverity {
    const castInput = input as IssueSeverity;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "IssueSeverity";
  }

  public clone(): IssueSeverity {
    const result = new IssueSeverity();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "IssueSeverity";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
