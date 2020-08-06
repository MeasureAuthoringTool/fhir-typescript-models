/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ITestScriptTeardownAction,
} from "../internal";

export interface ITestScriptTeardown extends IBackboneElement {
  action?: Array<ITestScriptTeardownAction>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
