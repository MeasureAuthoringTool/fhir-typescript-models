/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IObservationReferenceRange,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveDateTime,
  IPrimitiveInteger,
  IPrimitiveString,
  IPrimitiveTime,
  IQuantity,
  IRange,
  IRatio,
  ISampledData,
} from "../internal";

export interface IObservationComponent extends IBackboneElement {
  code?: ICodeableConcept;

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

  referenceRange?: Array<IObservationReferenceRange>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
