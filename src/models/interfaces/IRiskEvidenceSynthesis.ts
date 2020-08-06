/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IContactDetail,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IPrimitiveUri,
  IPublicationStatus,
  IReference,
  IRelatedArtifact,
  IRiskEvidenceSynthesisCertainty,
  IRiskEvidenceSynthesisRiskEstimate,
  IRiskEvidenceSynthesisSampleSize,
  IUsageContext,
} from "../internal";

export interface IRiskEvidenceSynthesis extends IDomainResource {
  url?: IPrimitiveUri;
  _url?: IElement;

  identifier?: Array<IIdentifier>;

  version?: IPrimitiveString;
  _version?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  title?: IPrimitiveString;
  _title?: IElement;

  status?: IPublicationStatus;
  _status?: IElement;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  publisher?: IPrimitiveString;
  _publisher?: IElement;

  contact?: Array<IContactDetail>;

  description?: IPrimitiveMarkdown;
  _description?: IElement;

  note?: Array<IAnnotation>;

  useContext?: Array<IUsageContext>;

  jurisdiction?: Array<ICodeableConcept>;

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

  synthesisType?: ICodeableConcept;

  studyType?: ICodeableConcept;

  population?: IReference;

  exposure?: IReference;

  outcome?: IReference;

  sampleSize?: IRiskEvidenceSynthesisSampleSize;

  riskEstimate?: IRiskEvidenceSynthesisRiskEstimate;

  certainty?: Array<IRiskEvidenceSynthesisCertainty>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
