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
  IPatientCommunication,
  IPatientContact,
  IPatientLink,
  IPrimitiveBoolean,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IPrimitiveInteger,
  IReference,
} from "../internal";

export interface IPatient extends IDomainResource {
  identifier?: Array<IIdentifier>;

  active?: IPrimitiveBoolean;
  _active?: IElement;

  name?: Array<IHumanName>;

  telecom?: Array<IContactPoint>;

  gender?: IAdministrativeGender;
  _gender?: IElement;

  birthDate?: IPrimitiveDate;
  _birthDate?: IElement;

  deceasedBoolean?: IPrimitiveBoolean;
  _deceasedBoolean?: IElement;
  
  deceasedDateTime?: IPrimitiveDateTime;
  _deceasedDateTime?: IElement;

  address?: Array<IAddress>;

  maritalStatus?: ICodeableConcept;

  multipleBirthBoolean?: IPrimitiveBoolean;
  _multipleBirthBoolean?: IElement;
  
  multipleBirthInteger?: IPrimitiveInteger;
  _multipleBirthInteger?: IElement;

  photo?: Array<IAttachment>;

  contact?: Array<IPatientContact>;

  communication?: Array<IPatientCommunication>;

  generalPractitioner?: Array<IReference>;

  managingOrganization?: IReference;

  link?: Array<IPatientLink>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
