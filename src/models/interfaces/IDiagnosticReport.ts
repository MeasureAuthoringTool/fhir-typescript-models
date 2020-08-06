/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAttachment,
  ICodeableConcept,
  IDiagnosticReportMedia,
  IDiagnosticReportStatus,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveInstant,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IDiagnosticReport extends IDomainResource {
  identifier?: Array<IIdentifier>;

  basedOn?: Array<IReference>;

  status?: IDiagnosticReportStatus;
  _status?: IElement;

  category?: Array<ICodeableConcept>;

  code?: ICodeableConcept;

  subject?: IReference;

  encounter?: IReference;

  effectiveDateTime?: IPrimitiveDateTime;
  _effectiveDateTime?: IElement;
  
  effectivePeriod?: IPeriod;

  issued?: IPrimitiveInstant;
  _issued?: IElement;

  performer?: Array<IReference>;

  resultsInterpreter?: Array<IReference>;

  specimen?: Array<IReference>;

  result?: Array<IReference>;

  imagingStudy?: Array<IReference>;

  media?: Array<IDiagnosticReportMedia>;

  conclusion?: IPrimitiveString;
  _conclusion?: IElement;

  conclusionCode?: Array<ICodeableConcept>;

  presentedForm?: Array<IAttachment>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
