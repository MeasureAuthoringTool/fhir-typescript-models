/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  ICodeableConcept,
  IContractContentDefinition,
  IContractFriendly,
  IContractLegal,
  IContractRule,
  IContractSigner,
  IContractStatus,
  IContractTerm,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveString,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface IContract extends IDomainResource {
  identifier?: Array<IIdentifier>;

  url?: IPrimitiveUri;
  _url?: IElement;

  version?: IPrimitiveString;
  _version?: IElement;

  status?: IContractStatus;
  _status?: IElement;

  legalState?: ICodeableConcept;

  instantiatesCanonical?: IReference;

  instantiatesUri?: IPrimitiveUri;
  _instantiatesUri?: IElement;

  contentDerivative?: ICodeableConcept;

  issued?: IPrimitiveDateTime;
  _issued?: IElement;

  applies?: IPeriod;

  expirationType?: ICodeableConcept;

  subject?: Array<IReference>;

  authority?: Array<IReference>;

  domain?: Array<IReference>;

  site?: Array<IReference>;

  name?: IPrimitiveString;
  _name?: IElement;

  title?: IPrimitiveString;
  _title?: IElement;

  subtitle?: IPrimitiveString;
  _subtitle?: IElement;

  alias?: Array<IPrimitiveString>;
  _alias?: Array<IElement | null>;

  author?: IReference;

  scope?: ICodeableConcept;

  topicCodeableConcept?: ICodeableConcept;
  
  topicReference?: IReference;

  type?: ICodeableConcept;

  subType?: Array<ICodeableConcept>;

  contentDefinition?: IContractContentDefinition;

  term?: Array<IContractTerm>;

  supportingInfo?: Array<IReference>;

  relevantHistory?: Array<IReference>;

  signer?: Array<IContractSigner>;

  friendly?: Array<IContractFriendly>;

  legal?: Array<IContractLegal>;

  rule?: Array<IContractRule>;

  legallyBindingAttachment?: IAttachment;
  
  legallyBindingReference?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
