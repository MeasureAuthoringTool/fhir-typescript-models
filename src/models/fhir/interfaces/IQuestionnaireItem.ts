/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICoding,
  IElement,
  IEnableWhenBehavior,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveInteger,
  IPrimitiveString,
  IPrimitiveUri,
  IQuestionnaireItemAnswerOption,
  IQuestionnaireItemEnableWhen,
  IQuestionnaireItemInitial,
  IQuestionnaireItemType,
} from "../internal";

export interface IQuestionnaireItem extends IBackboneElement {
  linkId?: IPrimitiveString;
  _linkId?: IElement;

  definition?: IPrimitiveUri;
  _definition?: IElement;

  code?: Array<ICoding>;

  prefix?: IPrimitiveString;
  _prefix?: IElement;

  text?: IPrimitiveString;
  _text?: IElement;

  type?: IQuestionnaireItemType;
  _type?: IElement;

  enableWhen?: Array<IQuestionnaireItemEnableWhen>;

  enableBehavior?: IEnableWhenBehavior;
  _enableBehavior?: IElement;

  required?: IPrimitiveBoolean;
  _required?: IElement;

  repeats?: IPrimitiveBoolean;
  _repeats?: IElement;

  readOnly?: IPrimitiveBoolean;
  _readOnly?: IElement;

  maxLength?: IPrimitiveInteger;
  _maxLength?: IElement;

  answerValueSet?: IPrimitiveCanonical;
  _answerValueSet?: IElement;

  answerOption?: Array<IQuestionnaireItemAnswerOption>;

  initial?: Array<IQuestionnaireItemInitial>;

  item?: Array<IQuestionnaireItem>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
