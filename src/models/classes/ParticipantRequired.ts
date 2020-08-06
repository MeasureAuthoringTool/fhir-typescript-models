/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ParticipantRequired extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ParticipantRequired";

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
  
  public getTypeName(): string {
    return "ParticipantRequired";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
