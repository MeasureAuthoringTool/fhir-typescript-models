/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ParticipationStatus", "PrimitiveCode")
export class ParticipationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ParticipationStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ParticipationStatus = new ParticipationStatus()
  ): ParticipationStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isParticipationStatus(input?: unknown): input is ParticipationStatus {
    const castInput = input as ParticipationStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ParticipationStatus";
  }

  public clone(): ParticipationStatus {
    const result = new ParticipationStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ParticipationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
