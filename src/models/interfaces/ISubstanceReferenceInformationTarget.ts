/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPrimitiveString,
  IQuantity,
  IRange,
  IReference,
} from "../internal";

export interface ISubstanceReferenceInformationTarget extends IBackboneElement {
  target?: IIdentifier;

  type?: ICodeableConcept;

  interaction?: ICodeableConcept;

  organism?: ICodeableConcept;

  organismType?: ICodeableConcept;

  amountQuantity?: IQuantity;
  
  amountRange?: IRange;
  
  amountString?: IPrimitiveString;
  _amountString?: IElement;

  amountType?: ICodeableConcept;

  source?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
