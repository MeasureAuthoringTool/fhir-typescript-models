/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveDateTime,
  ITimingRepeat,
} from "../internal";

export interface ITiming extends IBackboneElement {
  event?: Array<IPrimitiveDateTime>;
  _event?: Array<IElement | null>;

  repeat?: ITimingRepeat;

  code?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
