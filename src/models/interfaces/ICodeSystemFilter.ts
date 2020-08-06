/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IFilterOperator,
  IPrimitiveCode,
  IPrimitiveString,
} from "../internal";

export interface ICodeSystemFilter extends IBackboneElement {
  code?: IPrimitiveCode;
  _code?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  operator?: Array<IFilterOperator>;
  _operator?: Array<IElement | null>;

  value?: IPrimitiveString;
  _value?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
