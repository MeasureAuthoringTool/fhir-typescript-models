/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveCode,
  IPrimitiveString,
  IPrimitiveUri,
  IPropertyType,
} from "../internal";

export interface ICodeSystemProperty extends IBackboneElement {
  code?: IPrimitiveCode;
  _code?: IElement;

  uri?: IPrimitiveUri;
  _uri?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  type?: IPropertyType;
  _type?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
