/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
  IPrimitiveUri,
  IQuestionnaireResponseItemAnswer,
} from "../internal";

export interface IQuestionnaireResponseItem extends IBackboneElement {
  linkId?: IPrimitiveString;
  _linkId?: IElement;

  definition?: IPrimitiveUri;
  _definition?: IElement;

  text?: IPrimitiveString;
  _text?: IElement;

  answer?: Array<IQuestionnaireResponseItemAnswer>;

  item?: Array<IQuestionnaireResponseItem>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
