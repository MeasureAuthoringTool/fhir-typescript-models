/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  ContactPoint,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IPractitionerRole,
  Period,
  PractitionerRoleAvailableTime,
  PractitionerRoleNotAvailable,
  PrimitiveBoolean,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("PractitionerRole", "DomainResource")
export class PractitionerRole extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PractitionerRole";

  static readonly primaryCodePath: string | null = "code";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("PrimitiveBoolean")
  public active?: PrimitiveBoolean;

  @FhirField("Period")
  public period?: Period;

  @FhirField("Reference")
  public practitioner?: Reference;

  @FhirField("Reference")
  public organization?: Reference;

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

  @FhirList("PractitionerRoleAvailableTime")
  public availableTime?: Array<PractitionerRoleAvailableTime>;

  @FhirList("PractitionerRoleNotAvailable")
  public notAvailable?: Array<PractitionerRoleNotAvailable>;

  @FhirField("PrimitiveString")
  public availabilityExceptions?: PrimitiveString;

  @FhirList("Reference")
  public endpoint?: Array<Reference>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code?.[0];
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode ? [primaryCode] : [];
  }

  public static parse(
    json: IPractitionerRole,
    providedInstance: PractitionerRole = new PractitionerRole()
  ): PractitionerRole {
    const newInstance: PractitionerRole = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.active !== undefined) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.practitioner !== undefined) {
      newInstance.practitioner = Reference.parse(json.practitioner);
    }
    if (json.organization !== undefined) {
      newInstance.organization = Reference.parse(json.organization);
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
    if (json.availableTime !== undefined) {
      newInstance.availableTime = json.availableTime.map((x) => PractitionerRoleAvailableTime.parse(x));
    }
    if (json.notAvailable !== undefined) {
      newInstance.notAvailable = json.notAvailable.map((x) => PractitionerRoleNotAvailable.parse(x));
    }
    if (json.availabilityExceptions !== undefined) {
      newInstance.availabilityExceptions = PrimitiveString.parsePrimitive(json.availabilityExceptions, json._availabilityExceptions);
    }
    if (json.endpoint !== undefined) {
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

  public clone(): PractitionerRole {
    return PractitionerRole.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "PractitionerRole";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
