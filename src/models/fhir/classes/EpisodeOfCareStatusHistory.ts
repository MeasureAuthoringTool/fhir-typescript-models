/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  EpisodeOfCareStatus,
  Extension,
  FhirField,
  IEpisodeOfCareStatusHistory,
  Period,
  FhirType
} from "../internal";

@FhirType("EpisodeOfCareStatusHistory", "BackboneElement")
export class EpisodeOfCareStatusHistory extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EpisodeOfCare.StatusHistory";

  static readonly primaryCodePath: string | null = null;

  @FhirField("EpisodeOfCareStatus")
  public status?: EpisodeOfCareStatus;

  @FhirField("Period")
  public period?: Period;

  public static parse(
    json: IEpisodeOfCareStatusHistory,
    providedInstance: EpisodeOfCareStatusHistory = new EpisodeOfCareStatusHistory()
  ): EpisodeOfCareStatusHistory {
    const newInstance: EpisodeOfCareStatusHistory = BackboneElement.parse(json, providedInstance);
  
    if (json.status !== undefined) {
      newInstance.status = EpisodeOfCareStatus.parsePrimitive(json.status, json._status);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    return newInstance;
  }

  public static isEpisodeOfCareStatusHistory(input?: unknown): input is EpisodeOfCareStatusHistory {
    const castInput = input as EpisodeOfCareStatusHistory;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EpisodeOfCareStatusHistory";
  }

  public toJSON(): IEpisodeOfCareStatusHistory {
    const result: IEpisodeOfCareStatusHistory = super.toJSON();

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }

  public clone(): EpisodeOfCareStatusHistory {
    return EpisodeOfCareStatusHistory.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EpisodeOfCareStatusHistory";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
