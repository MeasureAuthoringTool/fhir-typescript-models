/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAddress,
  IAdministrativeGender,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IDomainResource,
  IElement,
  IHumanName,
  IIdentifier,
  IPractitionerQualification,
  IPrimitiveBoolean,
  IPrimitiveDate,
} from "../internal";

export interface IPractitioner extends IDomainResource {
  identifier?: Array<IIdentifier>;

  active?: IPrimitiveBoolean;
  _active?: IElement;

  name?: Array<IHumanName>;

  telecom?: Array<IContactPoint>;

  address?: Array<IAddress>;

  gender?: IAdministrativeGender;
  _gender?: IElement;

  birthDate?: IPrimitiveDate;
  _birthDate?: IElement;

  photo?: Array<IAttachment>;

  qualification?: Array<IPractitionerQualification>;

  communication?: Array<ICodeableConcept>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
