/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Address,
  CodeableConcept,
  ContactPoint,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IOrganization,
  OrganizationContact,
  PrimitiveBoolean,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("Organization", "DomainResource")
export class Organization extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Organization";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("PrimitiveBoolean")
  public active?: PrimitiveBoolean;

  @FhirList("CodeableConcept")
  public type?: Array<CodeableConcept>;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirList("PrimitiveString")
  public alias?: Array<PrimitiveString>;

  @FhirList("ContactPoint")
  public telecom?: Array<ContactPoint>;

  @FhirList("Address")
  public address?: Array<Address>;

  @FhirField("Reference")
  public partOf?: Reference;

  @FhirList("OrganizationContact")
  public contact?: Array<OrganizationContact>;

  @FhirList("Reference")
  public endpoint?: Array<Reference>;

  public static parse(
    json: IOrganization,
    providedInstance: Organization = new Organization()
  ): Organization {
    const newInstance: Organization = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.active !== undefined) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
    }
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.alias !== undefined) {
      newInstance.alias = json.alias.map((x, i) => PrimitiveString.parsePrimitive(x, json._alias?.[i]));
    }
    if (json.telecom !== undefined) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    if (json.address !== undefined) {
      newInstance.address = json.address.map((x) => Address.parse(x));
    }
    if (json.partOf !== undefined) {
      newInstance.partOf = Reference.parse(json.partOf);
    }
    if (json.contact !== undefined) {
      newInstance.contact = json.contact.map((x) => OrganizationContact.parse(x));
    }
    if (json.endpoint !== undefined) {
      newInstance.endpoint = json.endpoint.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isOrganization(input?: unknown): input is Organization {
    const castInput = input as Organization;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Organization";
  }

  public toJSON(): IOrganization {
    const result: IOrganization = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.active) {
      result.active = this.active.value;
      result._active = Extension.serializePrimitiveExtension(this.active);
    }

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.alias) {
      result.alias = this.alias.filter(x => !!x).map(x => x.value) as typeof result.alias;
      result._alias = Extension.serializePrimitiveExtensionArray(this.alias);
    }

    if (this.telecom) {
      result.telecom = this.telecom.map((x) => x.toJSON());
    }

    if (this.address) {
      result.address = this.address.map((x) => x.toJSON());
    }

    if (this.partOf) {
      result.partOf = this.partOf.toJSON();
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    if (this.endpoint) {
      result.endpoint = this.endpoint.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Organization {
    return Organization.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Organization";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
