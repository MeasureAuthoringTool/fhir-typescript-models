/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
} from "../internal";

export interface ITerminologyCapabilitiesTranslation extends IBackboneElement {
  needsMap?: IPrimitiveBoolean;
  _needsMap?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
