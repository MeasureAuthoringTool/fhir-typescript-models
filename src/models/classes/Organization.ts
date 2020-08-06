/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Address,
  CodeableConcept,
  ContactPoint,
  DomainResource,
  Extension,
  Identifier,
  IOrganization,
  OrganizationContact,
  PrimitiveBoolean,
  PrimitiveString,
  Reference,
} from "../internal";

export class Organization extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Organization";

  public identifier?: Array<Identifier>;

  public active?: PrimitiveBoolean;

  public type?: Array<CodeableConcept>;

  public name?: PrimitiveString;

  public alias?: Array<PrimitiveString>;

  public telecom?: Array<ContactPoint>;

  public address?: Array<Address>;

  public partOf?: Reference;

  public contact?: Array<OrganizationContact>;

  public endpoint?: Array<Reference>;

  public static parse(
    json: IOrganization,
    providedInstance: Organization = new Organization()
  ): Organization {
    const newInstance: Organization = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.active) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
    }
    if (json.type) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.alias) {
      newInstance.alias = json.alias.map((x, i) => {
        const ext = json._alias && json._alias[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.telecom) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    if (json.address) {
      newInstance.address = json.address.map((x) => Address.parse(x));
    }
    if (json.partOf) {
      newInstance.partOf = Reference.parse(json.partOf);
    }
    if (json.contact) {
      newInstance.contact = json.contact.map((x) => OrganizationContact.parse(x));
    }
    if (json.endpoint) {
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
  
  public getTypeName(): string {
    return "Organization";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
