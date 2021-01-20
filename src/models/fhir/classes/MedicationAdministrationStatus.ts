/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("MedicationAdministrationStatus", "PrimitiveCode")
export class MedicationAdministrationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationAdministrationStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: MedicationAdministrationStatus = new MedicationAdministrationStatus()
  ): MedicationAdministrationStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isMedicationAdministrationStatus(input?: unknown): input is MedicationAdministrationStatus {
    const castInput = input as MedicationAdministrationStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationAdministrationStatus";
  }

  public clone(): MedicationAdministrationStatus {
    const result = new MedicationAdministrationStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "MedicationAdministrationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
