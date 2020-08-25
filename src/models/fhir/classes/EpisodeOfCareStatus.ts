/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class EpisodeOfCareStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EpisodeOfCareStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EpisodeOfCareStatus = new EpisodeOfCareStatus()
  ): EpisodeOfCareStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEpisodeOfCareStatus(input?: unknown): input is EpisodeOfCareStatus {
    const castInput = input as EpisodeOfCareStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EpisodeOfCareStatus";
  }
  
  public getTypeName(): string {
    return "EpisodeOfCareStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
