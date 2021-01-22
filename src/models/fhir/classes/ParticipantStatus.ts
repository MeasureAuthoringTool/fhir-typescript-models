/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ParticipantStatus", "PrimitiveCode")
export class ParticipantStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ParticipantStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ParticipantStatus = new ParticipantStatus()
  ): ParticipantStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isParticipantStatus(input?: unknown): input is ParticipantStatus {
    const castInput = input as ParticipantStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ParticipantStatus";
  }

  public clone(): ParticipantStatus {
    const result = new ParticipantStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ParticipantStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
