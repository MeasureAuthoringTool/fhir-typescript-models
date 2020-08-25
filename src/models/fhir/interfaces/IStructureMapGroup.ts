/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveId,
  IPrimitiveString,
  IStructureMapGroupInput,
  IStructureMapGroupRule,
  IStructureMapGroupTypeMode,
} from "../internal";

export interface IStructureMapGroup extends IBackboneElement {
  name?: IPrimitiveId;
  _name?: IElement;

  extends?: IPrimitiveId;
  _extends?: IElement;

  typeMode?: IStructureMapGroupTypeMode;
  _typeMode?: IElement;

  documentation?: IPrimitiveString;
  _documentation?: IElement;

  input?: Array<IStructureMapGroupInput>;

  rule?: Array<IStructureMapGroupRule>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
