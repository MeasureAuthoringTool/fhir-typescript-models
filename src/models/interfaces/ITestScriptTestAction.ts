/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ITestScriptSetupActionAssert,
  ITestScriptSetupActionOperation,
} from "../internal";

export interface ITestScriptTestAction extends IBackboneElement {
  operation?: ITestScriptSetupActionOperation;

  assert?: ITestScriptSetupActionAssert;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
