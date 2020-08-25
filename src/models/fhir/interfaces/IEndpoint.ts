/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  ICoding,
  IContactPoint,
  IDomainResource,
  IElement,
  IEndpointStatus,
  IIdentifier,
  IMimeType,
  IPeriod,
  IPrimitiveString,
  IPrimitiveUrl,
  IReference,
} from "../internal";

export interface IEndpoint extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IEndpointStatus;
  _status?: IElement;

  connectionType?: ICoding;

  name?: IPrimitiveString;
  _name?: IElement;

  managingOrganization?: IReference;

  contact?: Array<IContactPoint>;

  period?: IPeriod;

  payloadType?: Array<ICodeableConcept>;

  payloadMimeType?: Array<IMimeType>;
  _payloadMimeType?: Array<IElement | null>;

  address?: IPrimitiveUrl;
  _address?: IElement;

  header?: Array<IPrimitiveString>;
  _header?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
