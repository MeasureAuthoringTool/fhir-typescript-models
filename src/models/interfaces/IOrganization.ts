/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IDomainResource,
  IElement,
  IIdentifier,
  IOrganizationContact,
  IPrimitiveBoolean,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IOrganization extends IDomainResource {
  identifier?: Array<IIdentifier>;

  active?: IPrimitiveBoolean;
  _active?: IElement;

  type?: Array<ICodeableConcept>;

  name?: IPrimitiveString;
  _name?: IElement;

  alias?: Array<IPrimitiveString>;
  _alias?: Array<IElement | null>;

  telecom?: Array<IContactPoint>;

  address?: Array<IAddress>;

  partOf?: IReference;

  contact?: Array<IOrganizationContact>;

  endpoint?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
