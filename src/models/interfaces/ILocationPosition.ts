/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveDecimal,
} from "../internal";

export interface ILocationPosition extends IBackboneElement {
  longitude?: IPrimitiveDecimal;
  _longitude?: IElement;

  latitude?: IPrimitiveDecimal;
  _latitude?: IElement;

  altitude?: IPrimitiveDecimal;
  _altitude?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
