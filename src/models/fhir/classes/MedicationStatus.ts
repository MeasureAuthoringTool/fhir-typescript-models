/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("MedicationStatus", "PrimitiveCode")
export class MedicationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: MedicationStatus = new MedicationStatus()
  ): MedicationStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isMedicationStatus(input?: unknown): input is MedicationStatus {
    const castInput = input as MedicationStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationStatus";
  }

  public clone(): MedicationStatus {
    const result = new MedicationStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "MedicationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
