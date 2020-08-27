/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IMeasureReportGroup,
  IMeasureReportStatus,
  IMeasureReportType,
  IPeriod,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IMeasureReport extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IMeasureReportStatus;
  _status?: IElement;

  type?: IMeasureReportType;
  _type?: IElement;

  measure?: IPrimitiveCanonical;
  _measure?: IElement;

  subject?: IReference;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  reporter?: IReference;

  period?: IPeriod;

  improvementNotation?: ICodeableConcept;

  group?: Array<IMeasureReportGroup>;

  evaluatedResource?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
