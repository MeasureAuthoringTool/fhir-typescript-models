/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("MedicationKnowledgeStatus", "PrimitiveCode")
export class MedicationKnowledgeStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledgeStatus";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): MedicationKnowledgeStatus {
    const result = new MedicationKnowledgeStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "MedicationKnowledgeStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
