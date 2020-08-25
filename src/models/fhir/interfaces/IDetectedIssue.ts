/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDetectedIssueEvidence,
  IDetectedIssueMitigation,
  IDetectedIssueSeverity,
  IDetectedIssueStatus,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveString,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface IDetectedIssue extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IDetectedIssueStatus;
  _status?: IElement;

  code?: ICodeableConcept;

  severity?: IDetectedIssueSeverity;
  _severity?: IElement;

  patient?: IReference;

  identifiedDateTime?: IPrimitiveDateTime;
  _identifiedDateTime?: IElement;
  
  identifiedPeriod?: IPeriod;

  author?: IReference;

  implicated?: Array<IReference>;

  evidence?: Array<IDetectedIssueEvidence>;

  detail?: IPrimitiveString;
  _detail?: IElement;

  reference?: IPrimitiveUri;
  _reference?: IElement;

  mitigation?: Array<IDetectedIssueMitigation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
