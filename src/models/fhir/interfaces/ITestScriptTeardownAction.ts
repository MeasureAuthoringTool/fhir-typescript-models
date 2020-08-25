/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ITestScriptSetupActionOperation,
} from "../internal";

export interface ITestScriptTeardownAction extends IBackboneElement {
  operation?: ITestScriptSetupActionOperation;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
