/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IPrimitiveCode,
  IPrimitiveId,
  IPrimitiveString,
  IPrimitiveUri,
} from "../internal";

export interface IExpression extends IElement {
  description?: IPrimitiveString;
  _description?: IElement;

  name?: IPrimitiveId;
  _name?: IElement;

  language?: IPrimitiveCode;
  _language?: IElement;

  expression?: IPrimitiveString;
  _expression?: IElement;

  reference?: IPrimitiveUri;
  _reference?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
