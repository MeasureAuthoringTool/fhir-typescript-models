/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveString,
  IStructureMapModelMode,
} from "../internal";

export interface IStructureMapStructure extends IBackboneElement {
  url?: IPrimitiveCanonical;
  _url?: IElement;

  mode?: IStructureMapModelMode;
  _mode?: IElement;

  alias?: IPrimitiveString;
  _alias?: IElement;

  documentation?: IPrimitiveString;
  _documentation?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
