/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Address,
  AdministrativeGender,
  Attachment,
  CodeableConcept,
  ContactPoint,
  DomainResource,
  Extension,
  HumanName,
  Identifier,
  IRelatedPerson,
  Period,
  PrimitiveBoolean,
  PrimitiveDate,
  Reference,
  RelatedPersonCommunication,
} from "../internal";

export class RelatedPerson extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RelatedPerson";

  public identifier?: Array<Identifier>;

  public active?: PrimitiveBoolean;

  public patient?: Reference;

  public relationship?: Array<CodeableConcept>;

  public name?: Array<HumanName>;

  public telecom?: Array<ContactPoint>;

  public gender?: AdministrativeGender;

  public birthDate?: PrimitiveDate;

  public address?: Array<Address>;

  public photo?: Array<Attachment>;

  public period?: Period;

  public communication?: Array<RelatedPersonCommunication>;

  public static parse(
    json: IRelatedPerson,
    providedInstance: RelatedPerson = new RelatedPerson()
  ): RelatedPerson {
    const newInstance: RelatedPerson = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.active !== undefined) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.relationship !== undefined) {
      newInstance.relationship = json.relationship.map((x) => CodeableConcept.parse(x));
    }
    if (json.name !== undefined) {
      newInstance.name = json.name.map((x) => HumanName.parse(x));
    }
    if (json.telecom !== undefined) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    if (json.gender !== undefined) {
      newInstance.gender = AdministrativeGender.parsePrimitive(json.gender, json._gender);
    }
    if (json.birthDate !== undefined) {
      newInstance.birthDate = PrimitiveDate.parsePrimitive(json.birthDate, json._birthDate);
    }
    if (json.address !== undefined) {
      newInstance.address = json.address.map((x) => Address.parse(x));
    }
    if (json.photo !== undefined) {
      newInstance.photo = json.photo.map((x) => Attachment.parse(x));
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.communication !== undefined) {
      newInstance.communication = json.communication.map((x) => RelatedPersonCommunication.parse(x));
    }
    return newInstance;
  }

  public static isRelatedPerson(input?: unknown): input is RelatedPerson {
    const castInput = input as RelatedPerson;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RelatedPerson";
  }

  public toJSON(): IRelatedPerson {
    const result: IRelatedPerson = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.active) {
      result.active = this.active.value;
      result._active = Extension.serializePrimitiveExtension(this.active);
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.relationship) {
      result.relationship = this.relationship.map((x) => x.toJSON());
    }

    if (this.name) {
      result.name = this.name.map((x) => x.toJSON());
    }

    if (this.telecom) {
      result.telecom = this.telecom.map((x) => x.toJSON());
    }

    if (this.gender) {
      result.gender = this.gender.value;
      result._gender = Extension.serializePrimitiveExtension(this.gender);
    }

    if (this.birthDate) {
      result.birthDate = this.birthDate.value;
      result._birthDate = Extension.serializePrimitiveExtension(this.birthDate);
    }

    if (this.address) {
      result.address = this.address.map((x) => x.toJSON());
    }

    if (this.photo) {
      result.photo = this.photo.map((x) => x.toJSON());
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.communication) {
      result.communication = this.communication.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): RelatedPerson {
    return RelatedPerson.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "RelatedPerson";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
