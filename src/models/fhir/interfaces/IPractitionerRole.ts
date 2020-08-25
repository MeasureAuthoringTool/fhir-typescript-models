/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IContactPoint,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPractitionerRoleAvailableTime,
  IPractitionerRoleNotAvailable,
  IPrimitiveBoolean,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IPractitionerRole extends IDomainResource {
  identifier?: Array<IIdentifier>;

  active?: IPrimitiveBoolean;
  _active?: IElement;

  period?: IPeriod;

  practitioner?: IReference;

  organization?: IReference;

  code?: Array<ICodeableConcept>;

  specialty?: Array<ICodeableConcept>;

  location?: Array<IReference>;

  healthcareService?: Array<IReference>;

  telecom?: Array<IContactPoint>;

  availableTime?: Array<IPractitionerRoleAvailableTime>;

  notAvailable?: Array<IPractitionerRoleNotAvailable>;

  availabilityExceptions?: IPrimitiveString;
  _availabilityExceptions?: IElement;

  endpoint?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
