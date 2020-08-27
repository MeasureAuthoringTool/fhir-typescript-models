/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IContactDetail,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUri,
  IPublicationStatus,
  IReference,
  IRelatedArtifact,
  IUsageContext,
} from "../internal";

export interface IResearchDefinition extends IDomainResource {
  url?: IPrimitiveUri;
  _url?: IElement;

  identifier?: Array<IIdentifier>;

  version?: IPrimitiveString;
  _version?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  title?: IPrimitiveString;
  _title?: IElement;

  shortTitle?: IPrimitiveString;
  _shortTitle?: IElement;

  subtitle?: IPrimitiveString;
  _subtitle?: IElement;

  status?: IPublicationStatus;
  _status?: IElement;

  experimental?: IPrimitiveBoolean;
  _experimental?: IElement;

  subjectCodeableConcept?: ICodeableConcept;
  
  subjectReference?: IReference;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  publisher?: IPrimitiveString;
  _publisher?: IElement;

  contact?: Array<IContactDetail>;

  description?: IPrimitiveMarkdown;
  _description?: IElement;

  comment?: Array<IPrimitiveString>;
  _comment?: Array<IElement | null>;

  useContext?: Array<IUsageContext>;

  jurisdiction?: Array<ICodeableConcept>;

  purpose?: IPrimitiveMarkdown;
  _purpose?: IElement;

  usage?: IPrimitiveString;
  _usage?: IElement;

  copyright?: IPrimitiveMarkdown;
  _copyright?: IElement;

  approvalDate?: IPrimitiveDate;
  _approvalDate?: IElement;

  lastReviewDate?: IPrimitiveDate;
  _lastReviewDate?: IElement;

  effectivePeriod?: IPeriod;

  topic?: Array<ICodeableConcept>;

  author?: Array<IContactDetail>;

  editor?: Array<IContactDetail>;

  reviewer?: Array<IContactDetail>;

  endorser?: Array<IContactDetail>;

  relatedArtifact?: Array<IRelatedArtifact>;

  library?: Array<IPrimitiveCanonical>;
  _library?: Array<IElement | null>;

  population?: IReference;

  exposure?: IReference;

  exposureAlternative?: IReference;

  outcome?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
