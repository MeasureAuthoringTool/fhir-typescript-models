/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  ICodeableConcept,
  IConsentPolicy,
  IConsentProvision,
  IConsentState,
  IConsentVerification,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IConsent extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IConsentState;
  _status?: IElement;

  scope?: ICodeableConcept;

  category?: Array<ICodeableConcept>;

  patient?: IReference;

  dateTime?: IPrimitiveDateTime;
  _dateTime?: IElement;

  performer?: Array<IReference>;

  organization?: Array<IReference>;

  sourceAttachment?: IAttachment;
  
  sourceReference?: IReference;

  policy?: Array<IConsentPolicy>;

  policyRule?: ICodeableConcept;

  verification?: Array<IConsentVerification>;

  provision?: IConsentProvision;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
