/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  CareTeamParticipant,
  CareTeamStatus,
  CodeableConcept,
  ContactPoint,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  ICareTeam,
  Identifier,
  Period,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("CareTeam", "DomainResource")
export class CareTeam extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CareTeam";

  static readonly primaryCodePath: string | null = "category";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("CareTeamStatus")
  public status?: CareTeamStatus;

  @FhirList("CodeableConcept")
  public category?: Array<CodeableConcept>;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("Reference")
  public subject?: Reference;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirField("Period")
  public period?: Period;

  @FhirList("CareTeamParticipant")
  public participant?: Array<CareTeamParticipant>;

  @FhirList("CodeableConcept")
  public reasonCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public reasonReference?: Array<Reference>;

  @FhirList("Reference")
  public managingOrganization?: Array<Reference>;

  @FhirList("ContactPoint")
  public telecom?: Array<ContactPoint>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.category?.[0];
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.category = primaryCode ? [primaryCode] : [];
  }

  public static parse(
    json: ICareTeam,
    providedInstance: CareTeam = new CareTeam()
  ): CareTeam {
    const newInstance: CareTeam = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = CareTeamStatus.parsePrimitive(json.status, json._status);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.participant !== undefined) {
      newInstance.participant = json.participant.map((x) => CareTeamParticipant.parse(x));
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.managingOrganization !== undefined) {
      newInstance.managingOrganization = json.managingOrganization.map((x) => Reference.parse(x));
    }
    if (json.telecom !== undefined) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    if (json.note !== undefined) {
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

  public clone(): CareTeam {
    return CareTeam.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CareTeam";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
