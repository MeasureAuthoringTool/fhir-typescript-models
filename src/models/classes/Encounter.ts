/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  Coding,
  DomainResource,
  Duration,
  EncounterClassHistory,
  EncounterDiagnosis,
  EncounterHospitalization,
  EncounterLocation,
  EncounterParticipant,
  EncounterStatus,
  EncounterStatusHistory,
  Extension,
  Identifier,
  IEncounter,
  Period,
  Reference,
} from "../internal";

export class Encounter extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Encounter";

  public identifier?: Array<Identifier>;

  public status?: EncounterStatus;

  public statusHistory?: Array<EncounterStatusHistory>;

  public class?: Coding;

  public classHistory?: Array<EncounterClassHistory>;

  public type?: Array<CodeableConcept>;

  public serviceType?: CodeableConcept;

  public priority?: CodeableConcept;

  public subject?: Reference;

  public episodeOfCare?: Array<Reference>;

  public basedOn?: Array<Reference>;

  public participant?: Array<EncounterParticipant>;

  public appointment?: Array<Reference>;

  public period?: Period;

  public length?: Duration;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public diagnosis?: Array<EncounterDiagnosis>;

  public account?: Array<Reference>;

  public hospitalization?: EncounterHospitalization;

  public location?: Array<EncounterLocation>;

  public serviceProvider?: Reference;

  public partOf?: Reference;

  public static parse(
    json: IEncounter,
    providedInstance: Encounter = new Encounter()
  ): Encounter {
    const newInstance: Encounter = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = EncounterStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusHistory) {
      newInstance.statusHistory = json.statusHistory.map((x) => EncounterStatusHistory.parse(x));
    }
    if (json.class) {
      newInstance.class = Coding.parse(json.class);
    }
    if (json.classHistory) {
      newInstance.classHistory = json.classHistory.map((x) => EncounterClassHistory.parse(x));
    }
    if (json.type) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.serviceType) {
      newInstance.serviceType = CodeableConcept.parse(json.serviceType);
    }
    if (json.priority) {
      newInstance.priority = CodeableConcept.parse(json.priority);
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.episodeOfCare) {
      newInstance.episodeOfCare = json.episodeOfCare.map((x) => Reference.parse(x));
    }
    if (json.basedOn) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.participant) {
      newInstance.participant = json.participant.map((x) => EncounterParticipant.parse(x));
    }
    if (json.appointment) {
      newInstance.appointment = json.appointment.map((x) => Reference.parse(x));
    }
    if (json.period) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.length) {
      newInstance.length = Duration.parse(json.length);
    }
    if (json.reasonCode) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.diagnosis) {
      newInstance.diagnosis = json.diagnosis.map((x) => EncounterDiagnosis.parse(x));
    }
    if (json.account) {
      newInstance.account = json.account.map((x) => Reference.parse(x));
    }
    if (json.hospitalization) {
      newInstance.hospitalization = EncounterHospitalization.parse(json.hospitalization);
    }
    if (json.location) {
      newInstance.location = json.location.map((x) => EncounterLocation.parse(x));
    }
    if (json.serviceProvider) {
      newInstance.serviceProvider = Reference.parse(json.serviceProvider);
    }
    if (json.partOf) {
      newInstance.partOf = Reference.parse(json.partOf);
    }
    return newInstance;
  }

  public static isEncounter(input?: unknown): input is Encounter {
    const castInput = input as Encounter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Encounter";
  }

  public toJSON(): IEncounter {
    const result: IEncounter = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.statusHistory) {
      result.statusHistory = this.statusHistory.map((x) => x.toJSON());
    }

    if (this.class) {
      result.class = this.class.toJSON();
    }

    if (this.classHistory) {
      result.classHistory = this.classHistory.map((x) => x.toJSON());
    }

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.serviceType) {
      result.serviceType = this.serviceType.toJSON();
    }

    if (this.priority) {
      result.priority = this.priority.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.episodeOfCare) {
      result.episodeOfCare = this.episodeOfCare.map((x) => x.toJSON());
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.map((x) => x.toJSON());
    }

    if (this.participant) {
      result.participant = this.participant.map((x) => x.toJSON());
    }

    if (this.appointment) {
      result.appointment = this.appointment.map((x) => x.toJSON());
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.length) {
      result.length = this.length.toJSON();
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.diagnosis) {
      result.diagnosis = this.diagnosis.map((x) => x.toJSON());
    }

    if (this.account) {
      result.account = this.account.map((x) => x.toJSON());
    }

    if (this.hospitalization) {
      result.hospitalization = this.hospitalization.toJSON();
    }

    if (this.location) {
      result.location = this.location.map((x) => x.toJSON());
    }

    if (this.serviceProvider) {
      result.serviceProvider = this.serviceProvider.toJSON();
    }

    if (this.partOf) {
      result.partOf = this.partOf.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Encounter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
