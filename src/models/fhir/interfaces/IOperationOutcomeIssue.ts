/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IIssueSeverity,
  IIssueType,
  IPrimitiveString,
} from "../internal";

export interface IOperationOutcomeIssue extends IBackboneElement {
  severity?: IIssueSeverity;
  _severity?: IElement;

  code?: IIssueType;
  _code?: IElement;

  details?: ICodeableConcept;

  diagnostics?: IPrimitiveString;
  _diagnostics?: IElement;

  location?: Array<IPrimitiveString>;
  _location?: Array<IElement | null>;

  expression?: Array<IPrimitiveString>;
  _expression?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
