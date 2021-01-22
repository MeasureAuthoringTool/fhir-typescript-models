/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Address,
  BackboneElement,
  CodeableConcept,
  ContactPoint,
  FhirField,
  FhirList,
  HumanName,
  IInsurancePlanContact,
  FhirType
} from "../internal";

@FhirType("InsurancePlanContact", "BackboneElement")
export class InsurancePlanContact extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "InsurancePlan.Contact";

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
    json: IInsurancePlanContact,
    providedInstance: InsurancePlanContact = new InsurancePlanContact()
  ): InsurancePlanContact {
    const newInstance: InsurancePlanContact = BackboneElement.parse(json, providedInstance);
  
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

  public static isInsurancePlanContact(input?: unknown): input is InsurancePlanContact {
    const castInput = input as InsurancePlanContact;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "InsurancePlanContact";
  }

  public toJSON(): IInsurancePlanContact {
    const result: IInsurancePlanContact = super.toJSON();

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

  public clone(): InsurancePlanContact {
    return InsurancePlanContact.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "InsurancePlanContact";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
