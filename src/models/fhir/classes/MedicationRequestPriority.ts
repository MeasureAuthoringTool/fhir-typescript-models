/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("MedicationRequestPriority", "PrimitiveCode")
export class MedicationRequestPriority extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationRequestPriority";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: MedicationRequestPriority = new MedicationRequestPriority()
  ): MedicationRequestPriority {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isMedicationRequestPriority(input?: unknown): input is MedicationRequestPriority {
    const castInput = input as MedicationRequestPriority;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationRequestPriority";
  }

  public clone(): MedicationRequestPriority {
    const result = new MedicationRequestPriority();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "MedicationRequestPriority";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
