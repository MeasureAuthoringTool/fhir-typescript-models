/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IObservationComponent,
  IObservationReferenceRange,
  IObservationStatus,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveDateTime,
  IPrimitiveInstant,
  IPrimitiveInteger,
  IPrimitiveString,
  IPrimitiveTime,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  ISampledData,
  ITiming,
} from "../internal";

export interface IObservation extends IDomainResource {
  identifier?: Array<IIdentifier>;

  basedOn?: Array<IReference>;

  partOf?: Array<IReference>;

  status?: IObservationStatus;
  _status?: IElement;

  category?: Array<ICodeableConcept>;

  code?: ICodeableConcept;

  subject?: IReference;

  focus?: Array<IReference>;

  encounter?: IReference;

  effectiveDateTime?: IPrimitiveDateTime;
  _effectiveDateTime?: IElement;
  
  effectivePeriod?: IPeriod;
  
  effectiveTiming?: ITiming;
  
  effectiveInstant?: IPrimitiveInstant;
  _effectiveInstant?: IElement;

  issued?: IPrimitiveInstant;
  _issued?: IElement;

  performer?: Array<IReference>;

  valueQuantity?: IQuantity;
  
  valueCodeableConcept?: ICodeableConcept;
  
  valueString?: IPrimitiveString;
  _valueString?: IElement;
  
  valueBoolean?: IPrimitiveBoolean;
  _valueBoolean?: IElement;
  
  valueInteger?: IPrimitiveInteger;
  _valueInteger?: IElement;
  
  valueRange?: IRange;
  
  valueRatio?: IRatio;
  
  valueSampledData?: ISampledData;
  
  valueTime?: IPrimitiveTime;
  _valueTime?: IElement;
  
  valueDateTime?: IPrimitiveDateTime;
  _valueDateTime?: IElement;
  
  valuePeriod?: IPeriod;

  dataAbsentReason?: ICodeableConcept;

  interpretation?: Array<ICodeableConcept>;

  note?: Array<IAnnotation>;

  bodySite?: ICodeableConcept;

  method?: ICodeableConcept;

  specimen?: IReference;

  device?: IReference;

  referenceRange?: Array<IObservationReferenceRange>;

  hasMember?: Array<IReference>;

  derivedFrom?: Array<IReference>;

  component?: Array<IObservationComponent>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
