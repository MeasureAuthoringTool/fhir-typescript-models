/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICompositionAttestationMode,
  IElement,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface ICompositionAttester extends IBackboneElement {
  mode?: ICompositionAttestationMode;
  _mode?: IElement;

  time?: IPrimitiveDateTime;
  _time?: IElement;

  party?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
