/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IContactDetail,
  IDomainResource,
  IElement,
  IIdentifier,
  IMeasureGroup,
  IMeasureSupplementalData,
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

export interface IMeasure extends IDomainResource {
  url?: IPrimitiveUri;
  _url?: IElement;

  identifier?: Array<IIdentifier>;

  version?: IPrimitiveString;
  _version?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  title?: IPrimitiveString;
  _title?: IElement;

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

  disclaimer?: IPrimitiveMarkdown;
  _disclaimer?: IElement;

  scoring?: ICodeableConcept;

  compositeScoring?: ICodeableConcept;

  type?: Array<ICodeableConcept>;

  riskAdjustment?: IPrimitiveString;
  _riskAdjustment?: IElement;

  rateAggregation?: IPrimitiveString;
  _rateAggregation?: IElement;

  rationale?: IPrimitiveMarkdown;
  _rationale?: IElement;

  clinicalRecommendationStatement?: IPrimitiveMarkdown;
  _clinicalRecommendationStatement?: IElement;

  improvementNotation?: ICodeableConcept;

  definition?: Array<IPrimitiveMarkdown>;
  _definition?: Array<IElement | null>;

  guidance?: IPrimitiveMarkdown;
  _guidance?: IElement;

  group?: Array<IMeasureGroup>;

  supplementalData?: Array<IMeasureSupplementalData>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
