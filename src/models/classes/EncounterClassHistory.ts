/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Coding,
  IEncounterClassHistory,
  Period,
} from "../internal";

export class EncounterClassHistory extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Encounter.ClassHistory";

  public class?: Coding;

  public period?: Period;

  public static parse(
    json: IEncounterClassHistory,
    providedInstance: EncounterClassHistory = new EncounterClassHistory()
  ): EncounterClassHistory {
    const newInstance: EncounterClassHistory = BackboneElement.parse(json, providedInstance);
  
    if (json.class) {
      newInstance.class = Coding.parse(json.class);
    }
    if (json.period) {
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
  
  public getTypeName(): string {
    return "EncounterClassHistory";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
