/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICoding,
  IElement,
  IImagingStudySeriesInstance,
  IImagingStudySeriesPerformer,
  IPrimitiveDateTime,
  IPrimitiveId,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
  IReference,
} from "../internal";

export interface IImagingStudySeries extends IBackboneElement {
  uid?: IPrimitiveId;
  _uid?: IElement;

  number?: IPrimitiveUnsignedInt;
  _number?: IElement;

  modality?: ICoding;

  description?: IPrimitiveString;
  _description?: IElement;

  numberOfInstances?: IPrimitiveUnsignedInt;
  _numberOfInstances?: IElement;

  endpoint?: Array<IReference>;

  bodySite?: ICoding;

  laterality?: ICoding;

  specimen?: Array<IReference>;

  started?: IPrimitiveDateTime;
  _started?: IElement;

  performer?: Array<IImagingStudySeriesPerformer>;

  instance?: Array<IImagingStudySeriesInstance>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
