/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IMedicinalProductAuthorizationJurisdictionalAuthorization,
  IMedicinalProductAuthorizationProcedure,
  IPeriod,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IMedicinalProductAuthorization extends IDomainResource {
  identifier?: Array<IIdentifier>;

  subject?: IReference;

  country?: Array<ICodeableConcept>;

  jurisdiction?: Array<ICodeableConcept>;

  status?: ICodeableConcept;

  statusDate?: IPrimitiveDateTime;
  _statusDate?: IElement;

  restoreDate?: IPrimitiveDateTime;
  _restoreDate?: IElement;

  validityPeriod?: IPeriod;

  dataExclusivityPeriod?: IPeriod;

  dateOfFirstAuthorization?: IPrimitiveDateTime;
  _dateOfFirstAuthorization?: IElement;

  internationalBirthDate?: IPrimitiveDateTime;
  _internationalBirthDate?: IElement;

  legalBasis?: ICodeableConcept;

  jurisdictionalAuthorization?: Array<IMedicinalProductAuthorizationJurisdictionalAuthorization>;

  holder?: IReference;

  regulator?: IReference;

  procedure?: IMedicinalProductAuthorizationProcedure;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
