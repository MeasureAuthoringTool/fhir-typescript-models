/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IContactPoint,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface IContactDetail extends IElement {
  name?: IPrimitiveString;
  _name?: IElement;

  telecom?: Array<IContactPoint>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
