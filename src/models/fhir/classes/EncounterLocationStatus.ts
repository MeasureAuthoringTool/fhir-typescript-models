/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("EncounterLocationStatus", "PrimitiveCode")
export class EncounterLocationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EncounterLocationStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EncounterLocationStatus = new EncounterLocationStatus()
  ): EncounterLocationStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEncounterLocationStatus(input?: unknown): input is EncounterLocationStatus {
    const castInput = input as EncounterLocationStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EncounterLocationStatus";
  }

  public clone(): EncounterLocationStatus {
    const result = new EncounterLocationStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "EncounterLocationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
