/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDeviceUseStatementStatus,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
  IReference,
  ITiming,
} from "../internal";

export interface IDeviceUseStatement extends IDomainResource {
  identifier?: Array<IIdentifier>;

  basedOn?: Array<IReference>;

  status?: IDeviceUseStatementStatus;
  _status?: IElement;

  subject?: IReference;

  derivedFrom?: Array<IReference>;

  timingTiming?: ITiming;
  
  timingPeriod?: IPeriod;
  
  timingDateTime?: IPrimitiveDateTime;
  _timingDateTime?: IElement;

  recordedOn?: IPrimitiveDateTime;
  _recordedOn?: IElement;

  source?: IReference;

  device?: IReference;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  bodySite?: ICodeableConcept;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
