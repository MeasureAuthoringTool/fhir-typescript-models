/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMoney,
  IPrimitiveDate,
  IReference,
} from "../internal";

export interface IPaymentReconciliationDetail extends IBackboneElement {
  identifier?: IIdentifier;

  predecessor?: IIdentifier;

  type?: ICodeableConcept;

  request?: IReference;

  submitter?: IReference;

  response?: IReference;

  date?: IPrimitiveDate;
  _date?: IElement;

  responsible?: IReference;

  payee?: IReference;

  amount?: IMoney;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
