/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IClaimResponseItemAdjudication,
  IClaimResponseItemDetailSubDetail,
  IElement,
  IPrimitivePositiveInt,
} from "../internal";

export interface IClaimResponseItemDetail extends IBackboneElement {
  detailSequence?: IPrimitivePositiveInt;
  _detailSequence?: IElement;

  noteNumber?: Array<IPrimitivePositiveInt>;
  _noteNumber?: Array<IElement | null>;

  adjudication?: Array<IClaimResponseItemAdjudication>;

  subDetail?: Array<IClaimResponseItemDetailSubDetail>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
