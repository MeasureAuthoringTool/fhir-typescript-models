/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("AuditEventOutcome", "PrimitiveCode")
export class AuditEventOutcome extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AuditEventOutcome";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: AuditEventOutcome = new AuditEventOutcome()
  ): AuditEventOutcome {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isAuditEventOutcome(input?: unknown): input is AuditEventOutcome {
    const castInput = input as AuditEventOutcome;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AuditEventOutcome";
  }

  public clone(): AuditEventOutcome {
    const result = new AuditEventOutcome();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "AuditEventOutcome";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
