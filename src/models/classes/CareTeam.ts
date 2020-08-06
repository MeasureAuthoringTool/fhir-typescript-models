/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CareTeamParticipant,
  CareTeamStatus,
  CodeableConcept,
  ContactPoint,
  DomainResource,
  Extension,
  ICareTeam,
  Identifier,
  Period,
  PrimitiveString,
  Reference,
} from "../internal";

export class CareTeam extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CareTeam";

  public identifier?: Array<Identifier>;

  public status?: CareTeamStatus;

  public category?: Array<CodeableConcept>;

  public name?: PrimitiveString;

  public subject?: Reference;

  public encounter?: Reference;

  public period?: Period;

  public participant?: Array<CareTeamParticipant>;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public managingOrganization?: Array<Reference>;

  public telecom?: Array<ContactPoint>;

  public note?: Array<Annotation>;

  public static parse(
    json: ICareTeam,
    providedInstance: CareTeam = new CareTeam()
  ): CareTeam {
    const newInstance: CareTeam = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = CareTeamStatus.parsePrimitive(json.status, json._status);
    }
    if (json.category) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.subject) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.period) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.participant) {
      newInstance.participant = json.participant.map((x) => CareTeamParticipant.parse(x));
    }
    if (json.reasonCode) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.managingOrganization) {
      newInstance.managingOrganization = json.managingOrganization.map((x) => Reference.parse(x));
    }
    if (json.telecom) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isCareTeam(input?: unknown): input is CareTeam {
    const castInput = input as CareTeam;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CareTeam";
  }

  public toJSON(): ICareTeam {
    const result: ICareTeam = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.participant) {
      result.participant = this.participant.map((x) => x.toJSON());
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.managingOrganization) {
      result.managingOrganization = this.managingOrganization.map((x) => x.toJSON());
    }

    if (this.telecom) {
      result.telecom = this.telecom.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "CareTeam";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
