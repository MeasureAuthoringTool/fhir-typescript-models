/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICoding,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveDate,
  IPrimitiveInteger,
  IPrimitiveString,
  IPrimitiveTime,
  IReference,
} from "../internal";

export interface IQuestionnaireItemAnswerOption extends IBackboneElement {
  valueInteger?: IPrimitiveInteger;
  _valueInteger?: IElement;
  
  valueDate?: IPrimitiveDate;
  _valueDate?: IElement;
  
  valueTime?: IPrimitiveTime;
  _valueTime?: IElement;
  
  valueString?: IPrimitiveString;
  _valueString?: IElement;
  
  valueCoding?: ICoding;
  
  valueReference?: IReference;

  initialSelected?: IPrimitiveBoolean;
  _initialSelected?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
