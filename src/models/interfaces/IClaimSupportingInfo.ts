/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveDate,
  IPrimitivePositiveInt,
  IPrimitiveString,
  IQuantity,
  IReference,
} from "../internal";

export interface IClaimSupportingInfo extends IBackboneElement {
  sequence?: IPrimitivePositiveInt;
  _sequence?: IElement;

  category?: ICodeableConcept;

  code?: ICodeableConcept;

  timingDate?: IPrimitiveDate;
  _timingDate?: IElement;
  
  timingPeriod?: IPeriod;

  valueBoolean?: IPrimitiveBoolean;
  _valueBoolean?: IElement;
  
  valueString?: IPrimitiveString;
  _valueString?: IElement;
  
  valueQuantity?: IQuantity;
  
  valueAttachment?: IAttachment;
  
  valueReference?: IReference;

  reason?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
