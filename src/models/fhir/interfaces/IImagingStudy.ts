/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  ICoding,
  IDomainResource,
  IElement,
  IIdentifier,
  IImagingStudySeries,
  IImagingStudyStatus,
  IPrimitiveDateTime,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
  IReference,
} from "../internal";

export interface IImagingStudy extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IImagingStudyStatus;
  _status?: IElement;

  modality?: Array<ICoding>;

  subject?: IReference;

  encounter?: IReference;

  started?: IPrimitiveDateTime;
  _started?: IElement;

  basedOn?: Array<IReference>;

  referrer?: IReference;

  interpreter?: Array<IReference>;

  endpoint?: Array<IReference>;

  numberOfSeries?: IPrimitiveUnsignedInt;
  _numberOfSeries?: IElement;

  numberOfInstances?: IPrimitiveUnsignedInt;
  _numberOfInstances?: IElement;

  procedureReference?: IReference;

  procedureCode?: Array<ICodeableConcept>;

  location?: IReference;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  note?: Array<IAnnotation>;

  description?: IPrimitiveString;
  _description?: IElement;

  series?: Array<IImagingStudySeries>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
