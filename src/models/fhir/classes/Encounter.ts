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
  FhirField,
  FhirList,
  Identifier,
  IEncounter,
  Period,
  Reference,
  FhirType
} from "../internal";

@FhirType("Encounter", "DomainResource")
export class Encounter extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Encounter";

  static readonly primaryCodePath: string | null = "type";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("EncounterStatus")
  public status?: EncounterStatus;

  @FhirList("EncounterStatusHistory")
  public statusHistory?: Array<EncounterStatusHistory>;

  @FhirField("Coding")
  public class?: Coding;

  @FhirList("EncounterClassHistory")
  public classHistory?: Array<EncounterClassHistory>;

  @FhirList("CodeableConcept")
  public type?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public serviceType?: CodeableConcept;

  @FhirField("CodeableConcept")
  public priority?: CodeableConcept;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirList("Reference")
  public episodeOfCare?: Array<Reference>;

  @FhirList("Reference")
  public basedOn?: Array<Reference>;

  @FhirList("EncounterParticipant")
  public participant?: Array<EncounterParticipant>;

  @FhirList("Reference")
  public appointment?: Array<Reference>;

  @FhirField("Period")
  public period?: Period;

  @FhirField("Duration")
  public length?: Duration;

  @FhirList("CodeableConcept")
  public reasonCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public reasonReference?: Array<Reference>;

  @FhirList("EncounterDiagnosis")
  public diagnosis?: Array<EncounterDiagnosis>;

  @FhirList("Reference")
  public account?: Array<Reference>;

  @FhirField("EncounterHospitalization")
  public hospitalization?: EncounterHospitalization;

  @FhirList("EncounterLocation")
  public location?: Array<EncounterLocation>;

  @FhirField("Reference")
  public serviceProvider?: Reference;

  @FhirField("Reference")
  public partOf?: Reference;

  get primaryCode(): CodeableConcept | undefined {
    return this?.type?.[0];
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.type = primaryCode ? [primaryCode] : [];
  }

  public static parse(
    json: IEncounter,
    providedInstance: Encounter = new Encounter()
  ): Encounter {
    const newInstance: Encounter = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = EncounterStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusHistory !== undefined) {
      newInstance.statusHistory = json.statusHistory.map((x) => EncounterStatusHistory.parse(x));
    }
    if (json.class !== undefined) {
      newInstance.class = Coding.parse(json.class);
    }
    if (json.classHistory !== undefined) {
      newInstance.classHistory = json.classHistory.map((x) => EncounterClassHistory.parse(x));
    }
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.serviceType !== undefined) {
      newInstance.serviceType = CodeableConcept.parse(json.serviceType);
    }
    if (json.priority !== undefined) {
      newInstance.priority = CodeableConcept.parse(json.priority);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.episodeOfCare !== undefined) {
      newInstance.episodeOfCare = json.episodeOfCare.map((x) => Reference.parse(x));
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.participant !== undefined) {
      newInstance.participant = json.participant.map((x) => EncounterParticipant.parse(x));
    }
    if (json.appointment !== undefined) {
      newInstance.appointment = json.appointment.map((x) => Reference.parse(x));
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.length !== undefined) {
      newInstance.length = Duration.parse(json.length);
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.diagnosis !== undefined) {
      newInstance.diagnosis = json.diagnosis.map((x) => EncounterDiagnosis.parse(x));
    }
    if (json.account !== undefined) {
      newInstance.account = json.account.map((x) => Reference.parse(x));
    }
    if (json.hospitalization !== undefined) {
      newInstance.hospitalization = EncounterHospitalization.parse(json.hospitalization);
    }
    if (json.location !== undefined) {
      newInstance.location = json.location.map((x) => EncounterLocation.parse(x));
    }
    if (json.serviceProvider !== undefined) {
      newInstance.serviceProvider = Reference.parse(json.serviceProvider);
    }
    if (json.partOf !== undefined) {
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

  public clone(): Encounter {
    return Encounter.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Encounter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
