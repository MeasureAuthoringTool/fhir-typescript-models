/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveId,
  IPrimitiveString,
} from "../internal";

export interface IStructureMapGroupRuleDependent extends IBackboneElement {
  name?: IPrimitiveId;
  _name?: IElement;

  variable?: Array<IPrimitiveString>;
  _variable?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
