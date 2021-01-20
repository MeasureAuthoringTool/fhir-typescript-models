/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  FhirField,
  IEncounterClassHistory,
  Period,
  FhirType
} from "../internal";

@FhirType("EncounterClassHistory", "BackboneElement")
export class EncounterClassHistory extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Encounter.ClassHistory";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Coding")
  public class?: Coding;

  @FhirField("Period")
  public period?: Period;

  public static parse(
    json: IEncounterClassHistory,
    providedInstance: EncounterClassHistory = new EncounterClassHistory()
  ): EncounterClassHistory {
    const newInstance: EncounterClassHistory = BackboneElement.parse(json, providedInstance);
  
    if (json.class !== undefined) {
      newInstance.class = Coding.parse(json.class);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    return newInstance;
  }

  public static isEncounterClassHistory(input?: unknown): input is EncounterClassHistory {
    const castInput = input as EncounterClassHistory;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EncounterClassHistory";
  }

  public toJSON(): IEncounterClassHistory {
    const result: IEncounterClassHistory = super.toJSON();

    if (this.class) {
      result.class = this.class.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }

  public clone(): EncounterClassHistory {
    return EncounterClassHistory.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EncounterClassHistory";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
