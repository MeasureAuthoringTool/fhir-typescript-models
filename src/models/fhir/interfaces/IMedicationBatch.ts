/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveDateTime,
  IPrimitiveString,
} from "../internal";

export interface IMedicationBatch extends IBackboneElement {
  lotNumber?: IPrimitiveString;
  _lotNumber?: IElement;

  expirationDate?: IPrimitiveDateTime;
  _expirationDate?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
