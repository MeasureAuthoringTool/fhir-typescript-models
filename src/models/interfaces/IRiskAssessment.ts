/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveString,
  IReference,
  IRiskAssessmentPrediction,
  IRiskAssessmentStatus,
} from "../internal";

export interface IRiskAssessment extends IDomainResource {
  identifier?: Array<IIdentifier>;

  basedOn?: IReference;

  parent?: IReference;

  status?: IRiskAssessmentStatus;
  _status?: IElement;

  method?: ICodeableConcept;

  code?: ICodeableConcept;

  subject?: IReference;

  encounter?: IReference;

  occurrenceDateTime?: IPrimitiveDateTime;
  _occurrenceDateTime?: IElement;
  
  occurrencePeriod?: IPeriod;

  condition?: IReference;

  performer?: IReference;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  basis?: Array<IReference>;

  prediction?: Array<IRiskAssessmentPrediction>;

  mitigation?: IPrimitiveString;
  _mitigation?: IElement;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
