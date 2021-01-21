/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("MedicationDispenseStatus", "PrimitiveCode")
export class MedicationDispenseStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationDispenseStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: MedicationDispenseStatus = new MedicationDispenseStatus()
  ): MedicationDispenseStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isMedicationDispenseStatus(input?: unknown): input is MedicationDispenseStatus {
    const castInput = input as MedicationDispenseStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationDispenseStatus";
  }

  public clone(): MedicationDispenseStatus {
    const result = new MedicationDispenseStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "MedicationDispenseStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
