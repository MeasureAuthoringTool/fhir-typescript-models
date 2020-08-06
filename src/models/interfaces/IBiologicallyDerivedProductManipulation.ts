/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveString,
} from "../internal";

export interface IBiologicallyDerivedProductManipulation extends IBackboneElement {
  description?: IPrimitiveString;
  _description?: IElement;

  timeDateTime?: IPrimitiveDateTime;
  _timeDateTime?: IElement;
  
  timePeriod?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
