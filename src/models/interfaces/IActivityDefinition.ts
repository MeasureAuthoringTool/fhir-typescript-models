/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IActivityDefinitionDynamicValue,
  IActivityDefinitionKind,
  IActivityDefinitionParticipant,
  IAge,
  ICodeableConcept,
  IContactDetail,
  IDomainResource,
  IDosage,
  IDuration,
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
  IRange,
  IReference,
  IRelatedArtifact,
  IRequestIntent,
  IRequestPriority,
  ISimpleQuantity,
  ITiming,
  IUsageContext,
} from "../internal";

export interface IActivityDefinition extends IDomainResource {
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

  kind?: IActivityDefinitionKind;
  _kind?: IElement;

  profile?: IPrimitiveCanonical;
  _profile?: IElement;

  code?: ICodeableConcept;

  intent?: IRequestIntent;
  _intent?: IElement;

  priority?: IRequestPriority;
  _priority?: IElement;

  doNotPerform?: IPrimitiveBoolean;
  _doNotPerform?: IElement;

  timingTiming?: ITiming;
  
  timingDateTime?: IPrimitiveDateTime;
  _timingDateTime?: IElement;
  
  timingAge?: IAge;
  
  timingPeriod?: IPeriod;
  
  timingRange?: IRange;
  
  timingDuration?: IDuration;

  location?: IReference;

  participant?: Array<IActivityDefinitionParticipant>;

  productReference?: IReference;
  
  productCodeableConcept?: ICodeableConcept;

  quantity?: ISimpleQuantity;

  dosage?: Array<IDosage>;

  bodySite?: Array<ICodeableConcept>;

  specimenRequirement?: Array<IReference>;

  observationRequirement?: Array<IReference>;

  observationResultRequirement?: Array<IReference>;

  transform?: IPrimitiveCanonical;
  _transform?: IElement;

  dynamicValue?: Array<IActivityDefinitionDynamicValue>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
