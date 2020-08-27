/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveString,
  IPrimitiveUri,
  ITestReportParticipantType,
} from "../internal";

export interface ITestReportParticipant extends IBackboneElement {
  type?: ITestReportParticipantType;
  _type?: IElement;

  uri?: IPrimitiveUri;
  _uri?: IElement;

  display?: IPrimitiveString;
  _display?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
