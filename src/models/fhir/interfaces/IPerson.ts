/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAddress,
  IAdministrativeGender,
  IAttachment,
  IContactPoint,
  IDomainResource,
  IElement,
  IHumanName,
  IIdentifier,
  IPersonLink,
  IPrimitiveBoolean,
  IPrimitiveDate,
  IReference,
} from "../internal";

export interface IPerson extends IDomainResource {
  identifier?: Array<IIdentifier>;

  name?: Array<IHumanName>;

  telecom?: Array<IContactPoint>;

  gender?: IAdministrativeGender;
  _gender?: IElement;

  birthDate?: IPrimitiveDate;
  _birthDate?: IElement;

  address?: Array<IAddress>;

  photo?: IAttachment;

  managingOrganization?: IReference;

  active?: IPrimitiveBoolean;
  _active?: IElement;

  link?: Array<IPersonLink>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
