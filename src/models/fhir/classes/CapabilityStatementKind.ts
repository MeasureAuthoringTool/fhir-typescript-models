/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("CapabilityStatementKind", "PrimitiveCode")
export class CapabilityStatementKind extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatementKind";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CapabilityStatementKind = new CapabilityStatementKind()
  ): CapabilityStatementKind {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCapabilityStatementKind(input?: unknown): input is CapabilityStatementKind {
    const castInput = input as CapabilityStatementKind;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatementKind";
  }

  public clone(): CapabilityStatementKind {
    const result = new CapabilityStatementKind();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CapabilityStatementKind";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
