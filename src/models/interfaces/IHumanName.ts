/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  INameUse,
  IPeriod,
  IPrimitiveString,
} from "../internal";

export interface IHumanName extends IElement {
  use?: INameUse;
  _use?: IElement;

  text?: IPrimitiveString;
  _text?: IElement;

  family?: IPrimitiveString;
  _family?: IElement;

  given?: Array<IPrimitiveString>;
  _given?: Array<IElement | null>;

  prefix?: Array<IPrimitiveString>;
  _prefix?: Array<IElement | null>;

  suffix?: Array<IPrimitiveString>;
  _suffix?: Array<IElement | null>;

  period?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
