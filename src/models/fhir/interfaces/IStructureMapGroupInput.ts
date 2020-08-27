/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveId,
  IPrimitiveString,
  IStructureMapInputMode,
} from "../internal";

export interface IStructureMapGroupInput extends IBackboneElement {
  name?: IPrimitiveId;
  _name?: IElement;

  type?: IPrimitiveString;
  _type?: IElement;

  mode?: IStructureMapInputMode;
  _mode?: IElement;

  documentation?: IPrimitiveString;
  _documentation?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
