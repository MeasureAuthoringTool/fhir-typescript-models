/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveDateTime,
  IPrimitiveDecimal,
  IPrimitiveString,
  IReference,
  ITestReportParticipant,
  ITestReportResult,
  ITestReportSetup,
  ITestReportStatus,
  ITestReportTeardown,
  ITestReportTest,
} from "../internal";

export interface ITestReport extends IDomainResource {
  identifier?: IIdentifier;

  name?: IPrimitiveString;
  _name?: IElement;

  status?: ITestReportStatus;
  _status?: IElement;

  testScript?: IReference;

  result?: ITestReportResult;
  _result?: IElement;

  score?: IPrimitiveDecimal;
  _score?: IElement;

  tester?: IPrimitiveString;
  _tester?: IElement;

  issued?: IPrimitiveDateTime;
  _issued?: IElement;

  participant?: Array<ITestReportParticipant>;

  setup?: ITestReportSetup;

  test?: Array<ITestReportTest>;

  teardown?: ITestReportTeardown;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
