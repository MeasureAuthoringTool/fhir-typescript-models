/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("EncounterStatus", "PrimitiveCode")
export class EncounterStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EncounterStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EncounterStatus = new EncounterStatus()
  ): EncounterStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEncounterStatus(input?: unknown): input is EncounterStatus {
    const castInput = input as EncounterStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EncounterStatus";
  }

  public clone(): EncounterStatus {
    const result = new EncounterStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "EncounterStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
