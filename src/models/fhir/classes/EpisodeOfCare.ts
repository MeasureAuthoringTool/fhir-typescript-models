/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  EpisodeOfCareDiagnosis,
  EpisodeOfCareStatus,
  EpisodeOfCareStatusHistory,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IEpisodeOfCare,
  Period,
  Reference,
  FhirType
} from "../internal";

@FhirType("EpisodeOfCare", "DomainResource")
export class EpisodeOfCare extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EpisodeOfCare";

  static readonly primaryCodePath: string | null = "type";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("EpisodeOfCareStatus")
  public status?: EpisodeOfCareStatus;

  @FhirList("EpisodeOfCareStatusHistory")
  public statusHistory?: Array<EpisodeOfCareStatusHistory>;

  @FhirList("CodeableConcept")
  public type?: Array<CodeableConcept>;

  @FhirList("EpisodeOfCareDiagnosis")
  public diagnosis?: Array<EpisodeOfCareDiagnosis>;

  @FhirField("Reference")
  public patient?: Reference;

  @FhirField("Reference")
  public managingOrganization?: Reference;

  @FhirField("Period")
  public period?: Period;

  @FhirList("Reference")
  public referralRequest?: Array<Reference>;

  @FhirField("Reference")
  public careManager?: Reference;

  @FhirList("Reference")
  public team?: Array<Reference>;

  @FhirList("Reference")
  public account?: Array<Reference>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.type?.[0];
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.type = primaryCode ? [primaryCode] : [];
  }

  public static parse(
    json: IEpisodeOfCare,
    providedInstance: EpisodeOfCare = new EpisodeOfCare()
  ): EpisodeOfCare {
    const newInstance: EpisodeOfCare = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = EpisodeOfCareStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusHistory !== undefined) {
      newInstance.statusHistory = json.statusHistory.map((x) => EpisodeOfCareStatusHistory.parse(x));
    }
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.diagnosis !== undefined) {
      newInstance.diagnosis = json.diagnosis.map((x) => EpisodeOfCareDiagnosis.parse(x));
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.managingOrganization !== undefined) {
      newInstance.managingOrganization = Reference.parse(json.managingOrganization);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.referralRequest !== undefined) {
      newInstance.referralRequest = json.referralRequest.map((x) => Reference.parse(x));
    }
    if (json.careManager !== undefined) {
      newInstance.careManager = Reference.parse(json.careManager);
    }
    if (json.team !== undefined) {
      newInstance.team = json.team.map((x) => Reference.parse(x));
    }
    if (json.account !== undefined) {
      newInstance.account = json.account.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isEpisodeOfCare(input?: unknown): input is EpisodeOfCare {
    const castInput = input as EpisodeOfCare;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EpisodeOfCare";
  }

  public toJSON(): IEpisodeOfCare {
    const result: IEpisodeOfCare = super.toJSON();

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

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.diagnosis) {
      result.diagnosis = this.diagnosis.map((x) => x.toJSON());
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.managingOrganization) {
      result.managingOrganization = this.managingOrganization.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.referralRequest) {
      result.referralRequest = this.referralRequest.map((x) => x.toJSON());
    }

    if (this.careManager) {
      result.careManager = this.careManager.toJSON();
    }

    if (this.team) {
      result.team = this.team.map((x) => x.toJSON());
    }

    if (this.account) {
      result.account = this.account.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): EpisodeOfCare {
    return EpisodeOfCare.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "EpisodeOfCare";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
