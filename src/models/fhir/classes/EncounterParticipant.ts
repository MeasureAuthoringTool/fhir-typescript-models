/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IEncounterParticipant,
  Period,
  Reference,
  FieldMetadata
} from "../internal";

export class EncounterParticipant extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Encounter.Participant";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "period",
      fieldType: [Period],
      isArray: false
    }, {
      fieldName: "individual",
      fieldType: [Reference],
      isArray: false
    }];
  }

  public type?: Array<CodeableConcept>;

  public period?: Period;

  public individual?: Reference;

  public static parse(
    json: IEncounterParticipant,
    providedInstance: EncounterParticipant = new EncounterParticipant()
  ): EncounterParticipant {
    const newInstance: EncounterParticipant = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.individual !== undefined) {
      newInstance.individual = Reference.parse(json.individual);
    }
    return newInstance;
  }

  public static isEncounterParticipant(input?: unknown): input is EncounterParticipant {
    const castInput = input as EncounterParticipant;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EncounterParticipant";
  }

  public toJSON(): IEncounterParticipant {
    const result: IEncounterParticipant = super.toJSON();

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.individual) {
      result.individual = this.individual.toJSON();
    }

    return result;
  }

  public clone(): EncounterParticipant {
    return EncounterParticipant.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EncounterParticipant";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
