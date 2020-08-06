/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitivePositiveInt,
} from "../internal";

export interface IClaimResponseError extends IBackboneElement {
  itemSequence?: IPrimitivePositiveInt;
  _itemSequence?: IElement;

  detailSequence?: IPrimitivePositiveInt;
  _detailSequence?: IElement;

  subDetailSequence?: IPrimitivePositiveInt;
  _subDetailSequence?: IElement;

  code?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
