/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICoding,
  IElement,
  IPrimitiveId,
  IPrimitiveString,
  IPrimitiveUnsignedInt,
} from "../internal";

export interface IImagingStudySeriesInstance extends IBackboneElement {
  uid?: IPrimitiveId;
  _uid?: IElement;

  sopClass?: ICoding;

  number?: IPrimitiveUnsignedInt;
  _number?: IElement;

  title?: IPrimitiveString;
  _title?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
