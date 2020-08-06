/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IDomainResource,
  IElement,
  IHealthcareServiceAvailableTime,
  IHealthcareServiceEligibility,
  IHealthcareServiceNotAvailable,
  IIdentifier,
  IPrimitiveBoolean,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IHealthcareService extends IDomainResource {
  identifier?: Array<IIdentifier>;

  active?: IPrimitiveBoolean;
  _active?: IElement;

  providedBy?: IReference;

  category?: Array<ICodeableConcept>;

  type?: Array<ICodeableConcept>;

  specialty?: Array<ICodeableConcept>;

  location?: Array<IReference>;

  name?: IPrimitiveString;
  _name?: IElement;

  comment?: IPrimitiveString;
  _comment?: IElement;

  extraDetails?: IPrimitiveMarkdown;
  _extraDetails?: IElement;

  photo?: IAttachment;

  telecom?: Array<IContactPoint>;

  coverageArea?: Array<IReference>;

  serviceProvisionCode?: Array<ICodeableConcept>;

  eligibility?: Array<IHealthcareServiceEligibility>;

  program?: Array<ICodeableConcept>;

  characteristic?: Array<ICodeableConcept>;

  communication?: Array<ICodeableConcept>;

  referralMethod?: Array<ICodeableConcept>;

  appointmentRequired?: IPrimitiveBoolean;
  _appointmentRequired?: IElement;

  availableTime?: Array<IHealthcareServiceAvailableTime>;

  notAvailable?: Array<IHealthcareServiceNotAvailable>;

  availabilityExceptions?: IPrimitiveString;
  _availabilityExceptions?: IElement;

  endpoint?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
