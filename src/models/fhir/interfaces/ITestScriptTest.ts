/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
  ITestScriptTestAction,
} from "../internal";

export interface ITestScriptTest extends IBackboneElement {
  name?: IPrimitiveString;
  _name?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  action?: Array<ITestScriptTestAction>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
