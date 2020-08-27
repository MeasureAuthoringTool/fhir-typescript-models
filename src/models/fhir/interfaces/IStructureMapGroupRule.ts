/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveId,
  IPrimitiveString,
  IStructureMapGroupRuleDependent,
  IStructureMapGroupRuleSource,
  IStructureMapGroupRuleTarget,
} from "../internal";

export interface IStructureMapGroupRule extends IBackboneElement {
  name?: IPrimitiveId;
  _name?: IElement;

  source?: Array<IStructureMapGroupRuleSource>;

  target?: Array<IStructureMapGroupRuleTarget>;

  rule?: Array<IStructureMapGroupRule>;

  dependent?: Array<IStructureMapGroupRuleDependent>;

  documentation?: IPrimitiveString;
  _documentation?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
