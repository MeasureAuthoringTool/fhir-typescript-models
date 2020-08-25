/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  IRange,
  ISimpleQuantity,
} from "../internal";

export interface IObservationReferenceRange extends IBackboneElement {
  low?: ISimpleQuantity;

  high?: ISimpleQuantity;

  type?: ICodeableConcept;

  appliesTo?: Array<ICodeableConcept>;

  age?: IRange;

  text?: IPrimitiveString;
  _text?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
