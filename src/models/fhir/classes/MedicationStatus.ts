/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class MedicationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationStatus";

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
  
  public getTypeName(): string {
    return "MedicationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
