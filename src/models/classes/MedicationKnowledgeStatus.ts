/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class MedicationKnowledgeStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledgeStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: MedicationKnowledgeStatus = new MedicationKnowledgeStatus()
  ): MedicationKnowledgeStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isMedicationKnowledgeStatus(input?: unknown): input is MedicationKnowledgeStatus {
    const castInput = input as MedicationKnowledgeStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledgeStatus";
  }
  
  public getTypeName(): string {
    return "MedicationKnowledgeStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
