/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveDateTime,
  IPrimitiveInteger,
  IPrimitiveUri,
  IValueSetExpansionContains,
  IValueSetExpansionParameter,
} from "../internal";

export interface IValueSetExpansion extends IBackboneElement {
  identifier?: IPrimitiveUri;
  _identifier?: IElement;

  timestamp?: IPrimitiveDateTime;
  _timestamp?: IElement;

  total?: IPrimitiveInteger;
  _total?: IElement;

  offset?: IPrimitiveInteger;
  _offset?: IElement;

  parameter?: Array<IValueSetExpansionParameter>;

  contains?: Array<IValueSetExpansionContains>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
