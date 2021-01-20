/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("MedicationRequestStatus", "PrimitiveCode")
export class MedicationRequestStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationRequestStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: MedicationRequestStatus = new MedicationRequestStatus()
  ): MedicationRequestStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isMedicationRequestStatus(input?: unknown): input is MedicationRequestStatus {
    const castInput = input as MedicationRequestStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationRequestStatus";
  }

  public clone(): MedicationRequestStatus {
    const result = new MedicationRequestStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "MedicationRequestStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
