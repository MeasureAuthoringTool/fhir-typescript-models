/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IMoney,
  IPrimitiveDecimal,
} from "../internal";

export interface IClaimResponseItemAdjudication extends IBackboneElement {
  category?: ICodeableConcept;

  reason?: ICodeableConcept;

  amount?: IMoney;

  value?: IPrimitiveDecimal;
  _value?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
