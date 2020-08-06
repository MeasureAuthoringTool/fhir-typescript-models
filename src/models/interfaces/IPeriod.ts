/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IPrimitiveDateTime,
} from "../internal";

export interface IPeriod extends IElement {
  start?: IPrimitiveDateTime;
  _start?: IElement;

  end?: IPrimitiveDateTime;
  _end?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
