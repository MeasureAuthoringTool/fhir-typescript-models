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
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveDate,
  IReference,
  IRelatedPersonCommunication,
} from "../internal";

export interface IRelatedPerson extends IDomainResource {
  identifier?: Array<IIdentifier>;

  active?: IPrimitiveBoolean;
  _active?: IElement;

  patient?: IReference;

  relationship?: Array<ICodeableConcept>;

  name?: Array<IHumanName>;

  telecom?: Array<IContactPoint>;

  gender?: IAdministrativeGender;
  _gender?: IElement;

  birthDate?: IPrimitiveDate;
  _birthDate?: IElement;

  address?: Array<IAddress>;

  photo?: Array<IAttachment>;

  period?: IPeriod;

  communication?: Array<IRelatedPersonCommunication>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
