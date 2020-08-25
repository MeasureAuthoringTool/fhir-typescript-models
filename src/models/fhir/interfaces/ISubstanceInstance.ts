/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IIdentifier,
  IPrimitiveDateTime,
  ISimpleQuantity,
} from "../internal";

export interface ISubstanceInstance extends IBackboneElement {
  identifier?: IIdentifier;

  expiry?: IPrimitiveDateTime;
  _expiry?: IElement;

  quantity?: ISimpleQuantity;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
