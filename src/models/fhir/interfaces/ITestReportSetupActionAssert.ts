/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveMarkdown,
  IPrimitiveString,
  ITestReportActionResult,
} from "../internal";

export interface ITestReportSetupActionAssert extends IBackboneElement {
  result?: ITestReportActionResult;
  _result?: IElement;

  message?: IPrimitiveMarkdown;
  _message?: IElement;

  detail?: IPrimitiveString;
  _detail?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
