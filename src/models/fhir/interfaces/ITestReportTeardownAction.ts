/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ITestReportSetupActionOperation,
} from "../internal";

export interface ITestReportTeardownAction extends IBackboneElement {
  operation?: ITestReportSetupActionOperation;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
