/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IFilterOperator,
  IPrimitiveCode,
  IPrimitiveString,
} from "../internal";

export interface IValueSetComposeIncludeFilter extends IBackboneElement {
  property?: IPrimitiveCode;
  _property?: IElement;

  op?: IFilterOperator;
  _op?: IElement;

  value?: IPrimitiveString;
  _value?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
