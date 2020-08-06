/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class MedicationAdministrationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationAdministrationStatus";

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
  
  public getTypeName(): string {
    return "MedicationAdministrationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
