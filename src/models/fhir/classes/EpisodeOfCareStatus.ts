/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("EpisodeOfCareStatus", "PrimitiveCode")
export class EpisodeOfCareStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EpisodeOfCareStatus";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): EpisodeOfCareStatus {
    const result = new EpisodeOfCareStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "EpisodeOfCareStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
