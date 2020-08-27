/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IImmunizationReaction extends IBackboneElement {
  date?: IPrimitiveDateTime;
  _date?: IElement;

  detail?: IReference;

  reported?: IPrimitiveBoolean;
  _reported?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
