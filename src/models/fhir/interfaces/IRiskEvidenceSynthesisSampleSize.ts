/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveInteger,
  IPrimitiveString,
} from "../internal";

export interface IRiskEvidenceSynthesisSampleSize extends IBackboneElement {
  description?: IPrimitiveString;
  _description?: IElement;

  numberOfStudies?: IPrimitiveInteger;
  _numberOfStudies?: IElement;

  numberOfParticipants?: IPrimitiveInteger;
  _numberOfParticipants?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
