/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IActionConditionKind,
  IBackboneElement,
  IElement,
  IExpression,
} from "../internal";

export interface IRequestGroupActionCondition extends IBackboneElement {
  kind?: IActionConditionKind;
  _kind?: IElement;

  expression?: IExpression;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
