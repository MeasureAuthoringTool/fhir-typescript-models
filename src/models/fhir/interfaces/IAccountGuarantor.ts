/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPeriod,
  IPrimitiveBoolean,
  IReference,
} from "../internal";

export interface IAccountGuarantor extends IBackboneElement {
  party?: IReference;

  onHold?: IPrimitiveBoolean;
  _onHold?: IElement;

  period?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
