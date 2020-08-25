/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  CodeableConcept,
  ContactPoint,
  DomainResource,
  Extension,
  HealthcareServiceAvailableTime,
  HealthcareServiceEligibility,
  HealthcareServiceNotAvailable,
  Identifier,
  IHealthcareService,
  PrimitiveBoolean,
  PrimitiveMarkdown,
  PrimitiveString,
  Reference,
} from "../internal";

export class HealthcareService extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "HealthcareService";

  public identifier?: Array<Identifier>;

  public active?: PrimitiveBoolean;

  public providedBy?: Reference;

  public category?: Array<CodeableConcept>;

  public type?: Array<CodeableConcept>;

  public specialty?: Array<CodeableConcept>;

  public location?: Array<Reference>;

  public name?: PrimitiveString;

  public comment?: PrimitiveString;

  public extraDetails?: PrimitiveMarkdown;

  public photo?: Attachment;

  public telecom?: Array<ContactPoint>;

  public coverageArea?: Array<Reference>;

  public serviceProvisionCode?: Array<CodeableConcept>;

  public eligibility?: Array<HealthcareServiceEligibility>;

  public program?: Array<CodeableConcept>;

  public characteristic?: Array<CodeableConcept>;

  public communication?: Array<CodeableConcept>;

  public referralMethod?: Array<CodeableConcept>;

  public appointmentRequired?: PrimitiveBoolean;

  public availableTime?: Array<HealthcareServiceAvailableTime>;

  public notAvailable?: Array<HealthcareServiceNotAvailable>;

  public availabilityExceptions?: PrimitiveString;

  public endpoint?: Array<Reference>;

  public static parse(
    json: IHealthcareService,
    providedInstance: HealthcareService = new HealthcareService()
  ): HealthcareService {
    const newInstance: HealthcareService = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.active !== undefined) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
    }
    if (json.providedBy !== undefined) {
      newInstance.providedBy = Reference.parse(json.providedBy);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.specialty !== undefined) {
      newInstance.specialty = json.specialty.map((x) => CodeableConcept.parse(x));
    }
    if (json.location !== undefined) {
      newInstance.location = json.location.map((x) => Reference.parse(x));
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.comment !== undefined) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    if (json.extraDetails !== undefined) {
      newInstance.extraDetails = PrimitiveMarkdown.parsePrimitive(json.extraDetails, json._extraDetails);
    }
    if (json.photo !== undefined) {
      newInstance.photo = Attachment.parse(json.photo);
    }
    if (json.telecom !== undefined) {
      newInstance.telecom = json.telecom.map((x) => ContactPoint.parse(x));
    }
    if (json.coverageArea !== undefined) {
      newInstance.coverageArea = json.coverageArea.map((x) => Reference.parse(x));
    }
    if (json.serviceProvisionCode !== undefined) {
      newInstance.serviceProvisionCode = json.serviceProvisionCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.eligibility !== undefined) {
      newInstance.eligibility = json.eligibility.map((x) => HealthcareServiceEligibility.parse(x));
    }
    if (json.program !== undefined) {
      newInstance.program = json.program.map((x) => CodeableConcept.parse(x));
    }
    if (json.characteristic !== undefined) {
      newInstance.characteristic = json.characteristic.map((x) => CodeableConcept.parse(x));
    }
    if (json.communication !== undefined) {
      newInstance.communication = json.communication.map((x) => CodeableConcept.parse(x));
    }
    if (json.referralMethod !== undefined) {
      newInstance.referralMethod = json.referralMethod.map((x) => CodeableConcept.parse(x));
    }
    if (json.appointmentRequired !== undefined) {
      newInstance.appointmentRequired = PrimitiveBoolean.parsePrimitive(json.appointmentRequired, json._appointmentRequired);
    }
    if (json.availableTime !== undefined) {
      newInstance.availableTime = json.availableTime.map((x) => HealthcareServiceAvailableTime.parse(x));
    }
    if (json.notAvailable !== undefined) {
      newInstance.notAvailable = json.notAvailable.map((x) => HealthcareServiceNotAvailable.parse(x));
    }
    if (json.availabilityExceptions !== undefined) {
      newInstance.availabilityExceptions = PrimitiveString.parsePrimitive(json.availabilityExceptions, json._availabilityExceptions);
    }
    if (json.endpoint !== undefined) {
      newInstance.endpoint = json.endpoint.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isHealthcareService(input?: unknown): input is HealthcareService {
    const castInput = input as HealthcareService;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "HealthcareService";
  }

  public toJSON(): IHealthcareService {
    const result: IHealthcareService = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.active) {
      result.active = this.active.value;
      result._active = Extension.serializePrimitiveExtension(this.active);
    }

    if (this.providedBy) {
      result.providedBy = this.providedBy.toJSON();
    }

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.specialty) {
      result.specialty = this.specialty.map((x) => x.toJSON());
    }

    if (this.location) {
      result.location = this.location.map((x) => x.toJSON());
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    if (this.extraDetails) {
      result.extraDetails = this.extraDetails.value;
      result._extraDetails = Extension.serializePrimitiveExtension(this.extraDetails);
    }

    if (this.photo) {
      result.photo = this.photo.toJSON();
    }

    if (this.telecom) {
      result.telecom = this.telecom.map((x) => x.toJSON());
    }

    if (this.coverageArea) {
      result.coverageArea = this.coverageArea.map((x) => x.toJSON());
    }

    if (this.serviceProvisionCode) {
      result.serviceProvisionCode = this.serviceProvisionCode.map((x) => x.toJSON());
    }

    if (this.eligibility) {
      result.eligibility = this.eligibility.map((x) => x.toJSON());
    }

    if (this.program) {
      result.program = this.program.map((x) => x.toJSON());
    }

    if (this.characteristic) {
      result.characteristic = this.characteristic.map((x) => x.toJSON());
    }

    if (this.communication) {
      result.communication = this.communication.map((x) => x.toJSON());
    }

    if (this.referralMethod) {
      result.referralMethod = this.referralMethod.map((x) => x.toJSON());
    }

    if (this.appointmentRequired) {
      result.appointmentRequired = this.appointmentRequired.value;
      result._appointmentRequired = Extension.serializePrimitiveExtension(this.appointmentRequired);
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

  public clone(): HealthcareService {
    return HealthcareService.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "HealthcareService";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
