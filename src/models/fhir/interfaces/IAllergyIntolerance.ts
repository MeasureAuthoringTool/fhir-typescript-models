/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAge,
  IAllergyIntoleranceCategory,
  IAllergyIntoleranceCriticality,
  IAllergyIntoleranceReaction,
  IAllergyIntoleranceType,
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveString,
  IRange,
  IReference,
} from "../internal";

export interface IAllergyIntolerance extends IDomainResource {
  identifier?: Array<IIdentifier>;

  clinicalStatus?: ICodeableConcept;

  verificationStatus?: ICodeableConcept;

  type?: IAllergyIntoleranceType;
  _type?: IElement;

  category?: Array<IAllergyIntoleranceCategory>;
  _category?: Array<IElement | null>;

  criticality?: IAllergyIntoleranceCriticality;
  _criticality?: IElement;

  code?: ICodeableConcept;

  patient?: IReference;

  encounter?: IReference;

  onsetDateTime?: IPrimitiveDateTime;
  _onsetDateTime?: IElement;
  
  onsetAge?: IAge;
  
  onsetPeriod?: IPeriod;
  
  onsetRange?: IRange;
  
  onsetString?: IPrimitiveString;
  _onsetString?: IElement;

  recordedDate?: IPrimitiveDateTime;
  _recordedDate?: IElement;

  recorder?: IReference;

  asserter?: IReference;

  lastOccurrence?: IPrimitiveDateTime;
  _lastOccurrence?: IElement;

  note?: Array<IAnnotation>;

  reaction?: Array<IAllergyIntoleranceReaction>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
