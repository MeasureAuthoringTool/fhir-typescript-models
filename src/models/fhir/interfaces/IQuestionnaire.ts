/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  ICoding,
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
  IQuestionnaireItem,
  IResourceType,
  IUsageContext,
} from "../internal";

export interface IQuestionnaire extends IDomainResource {
  url?: IPrimitiveUri;
  _url?: IElement;

  identifier?: Array<IIdentifier>;

  version?: IPrimitiveString;
  _version?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  title?: IPrimitiveString;
  _title?: IElement;

  derivedFrom?: Array<IPrimitiveCanonical>;
  _derivedFrom?: Array<IElement | null>;

  status?: IPublicationStatus;
  _status?: IElement;

  experimental?: IPrimitiveBoolean;
  _experimental?: IElement;

  subjectType?: Array<IResourceType>;
  _subjectType?: Array<IElement | null>;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  publisher?: IPrimitiveString;
  _publisher?: IElement;

  contact?: Array<IContactDetail>;

  description?: IPrimitiveMarkdown;
  _description?: IElement;

  useContext?: Array<IUsageContext>;

  jurisdiction?: Array<ICodeableConcept>;

  purpose?: IPrimitiveMarkdown;
  _purpose?: IElement;

  copyright?: IPrimitiveMarkdown;
  _copyright?: IElement;

  approvalDate?: IPrimitiveDate;
  _approvalDate?: IElement;

  lastReviewDate?: IPrimitiveDate;
  _lastReviewDate?: IElement;

  effectivePeriod?: IPeriod;

  code?: Array<ICoding>;

  item?: Array<IQuestionnaireItem>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
