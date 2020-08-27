/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IClaimResponseItemAdjudication,
  IClaimResponseItemDetail,
  IElement,
  IPrimitivePositiveInt,
} from "../internal";

export interface IClaimResponseItem extends IBackboneElement {
  itemSequence?: IPrimitivePositiveInt;
  _itemSequence?: IElement;

  noteNumber?: Array<IPrimitivePositiveInt>;
  _noteNumber?: Array<IElement | null>;

  adjudication?: Array<IClaimResponseItemAdjudication>;

  detail?: Array<IClaimResponseItemDetail>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
