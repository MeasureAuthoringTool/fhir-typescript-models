/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICoding,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IPrimitiveDecimal,
  IPrimitiveInteger,
  IPrimitiveString,
  IPrimitiveTime,
  IQuantity,
  IQuestionnaireItemOperator,
  IReference,
} from "../internal";

export interface IQuestionnaireItemEnableWhen extends IBackboneElement {
  question?: IPrimitiveString;
  _question?: IElement;

  operator?: IQuestionnaireItemOperator;
  _operator?: IElement;

  answerBoolean?: IPrimitiveBoolean;
  _answerBoolean?: IElement;
  
  answerDecimal?: IPrimitiveDecimal;
  _answerDecimal?: IElement;
  
  answerInteger?: IPrimitiveInteger;
  _answerInteger?: IElement;
  
  answerDate?: IPrimitiveDate;
  _answerDate?: IElement;
  
  answerDateTime?: IPrimitiveDateTime;
  _answerDateTime?: IElement;
  
  answerTime?: IPrimitiveTime;
  _answerTime?: IElement;
  
  answerString?: IPrimitiveString;
  _answerString?: IElement;
  
  answerCoding?: ICoding;
  
  answerQuantity?: IQuantity;
  
  answerReference?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
