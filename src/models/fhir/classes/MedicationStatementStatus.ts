/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("MedicationStatementStatus", "PrimitiveCode")
export class MedicationStatementStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationStatementStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: MedicationStatementStatus = new MedicationStatementStatus()
  ): MedicationStatementStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isMedicationStatementStatus(input?: unknown): input is MedicationStatementStatus {
    const castInput = input as MedicationStatementStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationStatementStatus";
  }

  public clone(): MedicationStatementStatus {
    const result = new MedicationStatementStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "MedicationStatementStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
