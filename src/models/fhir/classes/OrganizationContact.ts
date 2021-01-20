/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Address,
  BackboneElement,
  CodeableConcept,
  ContactPoint,
  FhirField,
  FhirList,
  HumanName,
  IOrganizationContact,
  FhirType
} from "../internal";

@FhirType("OrganizationContact", "BackboneElement")
export class OrganizationContact extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Organization.Contact";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public purpose?: CodeableConcept;

  @FhirField("HumanName")
  public name?: HumanName;

  @FhirList("ContactPoint")
  public telecom?: Array<ContactPoint>;

  @FhirField("Address")
  public address?: Address;

  public static parse(
    json: IOrganizationContact,
    providedInstance: OrganizationContact = new OrganizationContact()
  ): OrganizationContact {
    const newInstance: OrganizationContact = BackboneElement.parse(json, providedInstance);
  
    if (json.purpose !== undefined) {
      newInstance.purpose = CodeableConcept.parse(json.purpose);
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

  public clone(): OrganizationContact {
    return OrganizationContact.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "OrganizationContact";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
