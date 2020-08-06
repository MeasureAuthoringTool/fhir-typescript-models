/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IClaimResponseItemAdjudication,
  IElement,
  IPrimitivePositiveInt,
} from "../internal";

export interface IClaimResponseItemDetailSubDetail extends IBackboneElement {
  subDetailSequence?: IPrimitivePositiveInt;
  _subDetailSequence?: IElement;

  noteNumber?: Array<IPrimitivePositiveInt>;
  _noteNumber?: Array<IElement | null>;

  adjudication?: Array<IClaimResponseItemAdjudication>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
