/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class MedicationRequestIntent extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationRequestIntent";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: MedicationRequestIntent = new MedicationRequestIntent()
  ): MedicationRequestIntent {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isMedicationRequestIntent(input?: unknown): input is MedicationRequestIntent {
    const castInput = input as MedicationRequestIntent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationRequestIntent";
  }
  
  public getTypeName(): string {
    return "MedicationRequestIntent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
