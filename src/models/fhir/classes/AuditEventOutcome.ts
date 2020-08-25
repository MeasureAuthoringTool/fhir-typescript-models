/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class AuditEventOutcome extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AuditEventOutcome";

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
  
  public getTypeName(): string {
    return "AuditEventOutcome";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
