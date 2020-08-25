/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAddress,
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IDomainResource,
  IElement,
  IIdentifier,
  ILocationHoursOfOperation,
  ILocationMode,
  ILocationPosition,
  ILocationStatus,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface ILocation extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: ILocationStatus;
  _status?: IElement;

  operationalStatus?: ICoding;

  name?: IPrimitiveString;
  _name?: IElement;

  alias?: Array<IPrimitiveString>;
  _alias?: Array<IElement | null>;

  description?: IPrimitiveString;
  _description?: IElement;

  mode?: ILocationMode;
  _mode?: IElement;

  type?: Array<ICodeableConcept>;

  telecom?: Array<IContactPoint>;

  address?: IAddress;

  physicalType?: ICodeableConcept;

  position?: ILocationPosition;

  managingOrganization?: IReference;

  partOf?: IReference;

  hoursOfOperation?: Array<ILocationHoursOfOperation>;

  availabilityExceptions?: IPrimitiveString;
  _availabilityExceptions?: IElement;

  endpoint?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
