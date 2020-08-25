/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveDate,
  IValueSetComposeInclude,
} from "../internal";

export interface IValueSetCompose extends IBackboneElement {
  lockedDate?: IPrimitiveDate;
  _lockedDate?: IElement;

  inactive?: IPrimitiveBoolean;
  _inactive?: IElement;

  include?: Array<IValueSetComposeInclude>;

  exclude?: Array<IValueSetComposeInclude>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
