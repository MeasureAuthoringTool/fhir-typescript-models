/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ITestReportSetupActionAssert,
  ITestReportSetupActionOperation,
} from "../internal";

export interface ITestReportSetupAction extends IBackboneElement {
  operation?: ITestReportSetupActionOperation;

  assert?: ITestReportSetupActionAssert;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
