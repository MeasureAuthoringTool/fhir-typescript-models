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
  IPractitioner,
  PractitionerQualification,
  PrimitiveBoolean,
  PrimitiveDate,
} from "../internal";

export class Practitioner extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Practitioner";

  public identifier?: Array<Identifier>;

  public active?: PrimitiveBoolean;

  public name?: Array<HumanName>;

  public telecom?: Array<ContactPoint>;

  public address?: Array<Address>;

  public gender?: AdministrativeGender;

  public birthDate?: PrimitiveDate;

  public photo?: Array<Attachment>;

  public qualification?: Array<PractitionerQualification>;

  public communication?: Array<CodeableConcept>;

  public static parse(
    json: IPractitioner,
    providedInstance: Practitioner = new Practitioner()
  ): Practitioner {
    const newInstance: Practitioner = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.active) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
    }
    if (json.name) {
      newInstance.name = json.name.map((x) => HumanName.parse(x));
    }
    if (json.telecom) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    if (json.address) {
      newInstance.address = json.address.map((x) => Address.parse(x));
    }
    if (json.gender) {
      newInstance.gender = AdministrativeGender.parsePrimitive(json.gender, json._gender);
    }
    if (json.birthDate) {
      newInstance.birthDate = PrimitiveDate.parsePrimitive(json.birthDate, json._birthDate);
    }
    if (json.photo) {
      newInstance.photo = json.photo.map((x) => Attachment.parse(x));
    }
    if (json.qualification) {
      newInstance.qualification = json.qualification.map((x) => PractitionerQualification.parse(x));
    }
    if (json.communication) {
      newInstance.communication = json.communication.map((x) => CodeableConcept.parse(x));
    }
    return newInstance;
  }

  public static isPractitioner(input?: unknown): input is Practitioner {
    const castInput = input as Practitioner;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Practitioner";
  }

  public toJSON(): IPractitioner {
    const result: IPractitioner = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.active) {
      result.active = this.active.value;
      result._active = Extension.serializePrimitiveExtension(this.active);
    }

    if (this.name) {
      result.name = this.name.map((x) => x.toJSON());
    }

    if (this.telecom) {
      result.telecom = this.telecom.map((x) => x.toJSON());
    }

    if (this.address) {
      result.address = this.address.map((x) => x.toJSON());
    }

    if (this.gender) {
      result.gender = this.gender.value;
      result._gender = Extension.serializePrimitiveExtension(this.gender);
    }

    if (this.birthDate) {
      result.birthDate = this.birthDate.value;
      result._birthDate = Extension.serializePrimitiveExtension(this.birthDate);
    }

    if (this.photo) {
      result.photo = this.photo.map((x) => x.toJSON());
    }

    if (this.qualification) {
      result.qualification = this.qualification.map((x) => x.toJSON());
    }

    if (this.communication) {
      result.communication = this.communication.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Practitioner";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
