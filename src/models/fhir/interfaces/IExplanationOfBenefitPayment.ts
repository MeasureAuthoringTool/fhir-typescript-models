/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMoney,
  IPrimitiveDate,
} from "../internal";

export interface IExplanationOfBenefitPayment extends IBackboneElement {
  type?: ICodeableConcept;

  adjustment?: IMoney;

  adjustmentReason?: ICodeableConcept;

  date?: IPrimitiveDate;
  _date?: IElement;

  amount?: IMoney;

  identifier?: IIdentifier;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
