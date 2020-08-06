/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAge,
  IAnnotation,
  ICodeableConcept,
  IConditionEvidence,
  IConditionStage,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveString,
  IRange,
  IReference,
} from "../internal";

export interface ICondition extends IDomainResource {
  identifier?: Array<IIdentifier>;

  clinicalStatus?: ICodeableConcept;

  verificationStatus?: ICodeableConcept;

  category?: Array<ICodeableConcept>;

  severity?: ICodeableConcept;

  code?: ICodeableConcept;

  bodySite?: Array<ICodeableConcept>;

  subject?: IReference;

  encounter?: IReference;

  onsetDateTime?: IPrimitiveDateTime;
  _onsetDateTime?: IElement;
  
  onsetAge?: IAge;
  
  onsetPeriod?: IPeriod;
  
  onsetRange?: IRange;
  
  onsetString?: IPrimitiveString;
  _onsetString?: IElement;

  abatementDateTime?: IPrimitiveDateTime;
  _abatementDateTime?: IElement;
  
  abatementAge?: IAge;
  
  abatementPeriod?: IPeriod;
  
  abatementRange?: IRange;
  
  abatementString?: IPrimitiveString;
  _abatementString?: IElement;

  recordedDate?: IPrimitiveDateTime;
  _recordedDate?: IElement;

  recorder?: IReference;

  asserter?: IReference;

  stage?: Array<IConditionStage>;

  evidence?: Array<IConditionEvidence>;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
