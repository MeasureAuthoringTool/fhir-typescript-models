/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  EncounterStatus,
  Extension,
  FhirField,
  IEncounterStatusHistory,
  Period,
  FhirType
} from "../internal";

@FhirType("EncounterStatusHistory", "BackboneElement")
export class EncounterStatusHistory extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Encounter.StatusHistory";

  static readonly primaryCodePath: string | null = null;

  @FhirField("EncounterStatus")
  public status?: EncounterStatus;

  @FhirField("Period")
  public period?: Period;

  public static parse(
    json: IEncounterStatusHistory,
    providedInstance: EncounterStatusHistory = new EncounterStatusHistory()
  ): EncounterStatusHistory {
    const newInstance: EncounterStatusHistory = BackboneElement.parse(json, providedInstance);
  
    if (json.status !== undefined) {
      newInstance.status = EncounterStatus.parsePrimitive(json.status, json._status);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    return newInstance;
  }

  public static isEncounterStatusHistory(input?: unknown): input is EncounterStatusHistory {
    const castInput = input as EncounterStatusHistory;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EncounterStatusHistory";
  }

  public toJSON(): IEncounterStatusHistory {
    const result: IEncounterStatusHistory = super.toJSON();

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }

  public clone(): EncounterStatusHistory {
    return EncounterStatusHistory.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EncounterStatusHistory";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
