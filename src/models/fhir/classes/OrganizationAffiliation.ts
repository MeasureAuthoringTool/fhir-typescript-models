/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  ContactPoint,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IOrganizationAffiliation,
  Period,
  PrimitiveBoolean,
  Reference,
  FhirType
} from "../internal";

@FhirType("OrganizationAffiliation", "DomainResource")
export class OrganizationAffiliation extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "OrganizationAffiliation";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("PrimitiveBoolean")
  public active?: PrimitiveBoolean;

  @FhirField("Period")
  public period?: Period;

  @FhirField("Reference")
  public organization?: Reference;

  @FhirField("Reference")
  public participatingOrganization?: Reference;

  @FhirList("Reference")
  public network?: Array<Reference>;

  @FhirList("CodeableConcept")
  public code?: Array<CodeableConcept>;

  @FhirList("CodeableConcept")
  public specialty?: Array<CodeableConcept>;

  @FhirList("Reference")
  public location?: Array<Reference>;

  @FhirList("Reference")
  public healthcareService?: Array<Reference>;

  @FhirList("ContactPoint")
  public telecom?: Array<ContactPoint>;

  @FhirList("Reference")
  public endpoint?: Array<Reference>;

  public static parse(
    json: IOrganizationAffiliation,
    providedInstance: OrganizationAffiliation = new OrganizationAffiliation()
  ): OrganizationAffiliation {
    const newInstance: OrganizationAffiliation = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.active !== undefined) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.organization !== undefined) {
      newInstance.organization = Reference.parse(json.organization);
    }
    if (json.participatingOrganization !== undefined) {
      newInstance.participatingOrganization = Reference.parse(json.participatingOrganization);
    }
    if (json.network !== undefined) {
      newInstance.network = json.network.map((x) => Reference.parse(x));
    }
    if (json.code !== undefined) {
      newInstance.code = json.code.map((x) => CodeableConcept.parse(x));
    }
    if (json.specialty !== undefined) {
      newInstance.specialty = json.specialty.map((x) => CodeableConcept.parse(x));
    }
    if (json.location !== undefined) {
      newInstance.location = json.location.map((x) => Reference.parse(x));
    }
    if (json.healthcareService !== undefined) {
      newInstance.healthcareService = json.healthcareService.map((x) => Reference.parse(x));
    }
    if (json.telecom !== undefined) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    if (json.endpoint !== undefined) {
      newInstance.endpoint = json.endpoint.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isOrganizationAffiliation(input?: unknown): input is OrganizationAffiliation {
    const castInput = input as OrganizationAffiliation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "OrganizationAffiliation";
  }

  public toJSON(): IOrganizationAffiliation {
    const result: IOrganizationAffiliation = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.active) {
      result.active = this.active.value;
      result._active = Extension.serializePrimitiveExtension(this.active);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.organization) {
      result.organization = this.organization.toJSON();
    }

    if (this.participatingOrganization) {
      result.participatingOrganization = this.participatingOrganization.toJSON();
    }

    if (this.network) {
      result.network = this.network.map((x) => x.toJSON());
    }

    if (this.code) {
      result.code = this.code.map((x) => x.toJSON());
    }

    if (this.specialty) {
      result.specialty = this.specialty.map((x) => x.toJSON());
    }

    if (this.location) {
      result.location = this.location.map((x) => x.toJSON());
    }

    if (this.healthcareService) {
      result.healthcareService = this.healthcareService.map((x) => x.toJSON());
    }

    if (this.telecom) {
      result.telecom = this.telecom.map((x) => x.toJSON());
    }

    if (this.endpoint) {
      result.endpoint = this.endpoint.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): OrganizationAffiliation {
    return OrganizationAffiliation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "OrganizationAffiliation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
