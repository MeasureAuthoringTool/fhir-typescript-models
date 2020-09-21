/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Address,
  AdministrativeGender,
  BackboneElement,
  CodeableConcept,
  ContactPoint,
  Extension,
  HumanName,
  IPatientContact,
  Period,
  Reference,
} from "../internal";

export class PatientContact extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Patient.Contact";
  
  static readonly primaryCodePath: string | null = null;

  public relationship?: Array<CodeableConcept>;

  public name?: HumanName;

  public telecom?: Array<ContactPoint>;

  public address?: Address;

  public gender?: AdministrativeGender;

  public organization?: Reference;

  public period?: Period;

  public static parse(
    json: IPatientContact,
    providedInstance: PatientContact = new PatientContact()
  ): PatientContact {
    const newInstance: PatientContact = BackboneElement.parse(json, providedInstance);
  
    if (json.relationship !== undefined) {
      newInstance.relationship = json.relationship.map((x) => CodeableConcept.parse(x));
    }
    if (json.name !== undefined) {
      newInstance.name = HumanName.parse(json.name);
    }
    if (json.telecom !== undefined) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    if (json.address !== undefined) {
      newInstance.address = Address.parse(json.address);
    }
    if (json.gender !== undefined) {
      newInstance.gender = AdministrativeGender.parsePrimitive(json.gender, json._gender);
    }
    if (json.organization !== undefined) {
      newInstance.organization = Reference.parse(json.organization);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    return newInstance;
  }

  public static isPatientContact(input?: unknown): input is PatientContact {
    const castInput = input as PatientContact;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PatientContact";
  }

  public toJSON(): IPatientContact {
    const result: IPatientContact = super.toJSON();

    if (this.relationship) {
      result.relationship = this.relationship.map((x) => x.toJSON());
    }

    if (this.name) {
      result.name = this.name.toJSON();
    }

    if (this.telecom) {
      result.telecom = this.telecom.map((x) => x.toJSON());
    }

    if (this.address) {
      result.address = this.address.toJSON();
    }

    if (this.gender) {
      result.gender = this.gender.value;
      result._gender = Extension.serializePrimitiveExtension(this.gender);
    }

    if (this.organization) {
      result.organization = this.organization.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }

  public clone(): PatientContact {
    return PatientContact.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PatientContact";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
