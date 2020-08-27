/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ITestReportTeardownAction,
} from "../internal";

export interface ITestReportTeardown extends IBackboneElement {
  action?: Array<ITestReportTeardownAction>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
