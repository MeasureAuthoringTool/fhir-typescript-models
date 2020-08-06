/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPeriod,
  IPrimitiveString,
} from "../internal";

export interface IHealthcareServiceNotAvailable extends IBackboneElement {
  description?: IPrimitiveString;
  _description?: IElement;

  during?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
