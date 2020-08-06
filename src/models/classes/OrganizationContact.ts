/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Address,
  BackboneElement,
  CodeableConcept,
  ContactPoint,
  HumanName,
  IOrganizationContact,
} from "../internal";

export class OrganizationContact extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Organization.Contact";

  public purpose?: CodeableConcept;

  public name?: HumanName;

  public telecom?: Array<ContactPoint>;

  public address?: Address;

  public static parse(
    json: IOrganizationContact,
    providedInstance: OrganizationContact = new OrganizationContact()
  ): OrganizationContact {
    const newInstance: OrganizationContact = BackboneElement.parse(json, providedInstance);
  
    if (json.purpose) {
      newInstance.purpose = CodeableConcept.parse(json.purpose);
    }
    if (json.name) {
      newInstance.name = HumanName.parse(json.name);
    }
    if (json.telecom) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    if (json.address) {
      newInstance.address = Address.parse(json.address);
    }
    return newInstance;
  }

  public static isOrganizationContact(input?: unknown): input is OrganizationContact {
    const castInput = input as OrganizationContact;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "OrganizationContact";
  }

  public toJSON(): IOrganizationContact {
    const result: IOrganizationContact = super.toJSON();

    if (this.purpose) {
      result.purpose = this.purpose.toJSON();
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

    return result;
  }
  
  public getTypeName(): string {
    return "OrganizationContact";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
