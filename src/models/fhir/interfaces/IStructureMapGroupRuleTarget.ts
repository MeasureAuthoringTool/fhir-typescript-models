/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveId,
  IPrimitiveString,
  IStructureMapContextType,
  IStructureMapGroupRuleTargetParameter,
  IStructureMapTargetListMode,
  IStructureMapTransform,
} from "../internal";

export interface IStructureMapGroupRuleTarget extends IBackboneElement {
  context?: IPrimitiveId;
  _context?: IElement;

  contextType?: IStructureMapContextType;
  _contextType?: IElement;

  element?: IPrimitiveString;
  _element?: IElement;

  variable?: IPrimitiveId;
  _variable?: IElement;

  listMode?: Array<IStructureMapTargetListMode>;
  _listMode?: Array<IElement | null>;

  listRuleId?: IPrimitiveId;
  _listRuleId?: IElement;

  transform?: IStructureMapTransform;
  _transform?: IElement;

  parameter?: Array<IStructureMapGroupRuleTargetParameter>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
