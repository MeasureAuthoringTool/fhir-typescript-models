/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  ContactPoint,
  DomainResource,
  Extension,
  Identifier,
  IPractitionerRole,
  Period,
  PractitionerRoleAvailableTime,
  PractitionerRoleNotAvailable,
  PrimitiveBoolean,
  PrimitiveString,
  Reference,
} from "../internal";

export class PractitionerRole extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PractitionerRole";

  public identifier?: Array<Identifier>;

  public active?: PrimitiveBoolean;

  public period?: Period;

  public practitioner?: Reference;

  public organization?: Reference;

  public code?: Array<CodeableConcept>;

  public specialty?: Array<CodeableConcept>;

  public location?: Array<Reference>;

  public healthcareService?: Array<Reference>;

  public telecom?: Array<ContactPoint>;

  public availableTime?: Array<PractitionerRoleAvailableTime>;

  public notAvailable?: Array<PractitionerRoleNotAvailable>;

  public availabilityExceptions?: PrimitiveString;

  public endpoint?: Array<Reference>;

  public static parse(
    json: IPractitionerRole,
    providedInstance: PractitionerRole = new PractitionerRole()
  ): PractitionerRole {
    const newInstance: PractitionerRole = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.active) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
    }
    if (json.period) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.practitioner) {
      newInstance.practitioner = Reference.parse(json.practitioner);
    }
    if (json.organization) {
      newInstance.organization = Reference.parse(json.organization);
    }
    if (json.code) {
      newInstance.code = json.code.map((x) => CodeableConcept.parse(x));
    }
    if (json.specialty) {
      newInstance.specialty = json.specialty.map((x) => CodeableConcept.parse(x));
    }
    if (json.location) {
      newInstance.location = json.location.map((x) => Reference.parse(x));
    }
    if (json.healthcareService) {
      newInstance.healthcareService = json.healthcareService.map((x) => Reference.parse(x));
    }
    if (json.telecom) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    if (json.availableTime) {
      newInstance.availableTime = json.availableTime.map((x) => PractitionerRoleAvailableTime.parse(x));
    }
    if (json.notAvailable) {
      newInstance.notAvailable = json.notAvailable.map((x) => PractitionerRoleNotAvailable.parse(x));
    }
    if (json.availabilityExceptions) {
      newInstance.availabilityExceptions = PrimitiveString.parsePrimitive(json.availabilityExceptions, json._availabilityExceptions);
    }
    if (json.endpoint) {
      newInstance.endpoint = json.endpoint.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isPractitionerRole(input?: unknown): input is PractitionerRole {
    const castInput = input as PractitionerRole;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PractitionerRole";
  }

  public toJSON(): IPractitionerRole {
    const result: IPractitionerRole = super.toJSON();

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

    if (this.practitioner) {
      result.practitioner = this.practitioner.toJSON();
    }

    if (this.organization) {
      result.organization = this.organization.toJSON();
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

    if (this.availableTime) {
      result.availableTime = this.availableTime.map((x) => x.toJSON());
    }

    if (this.notAvailable) {
      result.notAvailable = this.notAvailable.map((x) => x.toJSON());
    }

    if (this.availabilityExceptions) {
      result.availabilityExceptions = this.availabilityExceptions.value;
      result._availabilityExceptions = Extension.serializePrimitiveExtension(this.availabilityExceptions);
    }

    if (this.endpoint) {
      result.endpoint = this.endpoint.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "PractitionerRole";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
