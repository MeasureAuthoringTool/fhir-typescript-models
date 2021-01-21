/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ParticipantRequired", "PrimitiveCode")
export class ParticipantRequired extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ParticipantRequired";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ParticipantRequired = new ParticipantRequired()
  ): ParticipantRequired {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isParticipantRequired(input?: unknown): input is ParticipantRequired {
    const castInput = input as ParticipantRequired;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ParticipantRequired";
  }

  public clone(): ParticipantRequired {
    const result = new ParticipantRequired();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ParticipantRequired";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
