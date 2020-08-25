/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveDecimal,
} from "../internal";

export interface IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends IBackboneElement {
  type?: ICodeableConcept;

  level?: IPrimitiveDecimal;
  _level?: IElement;

  from?: IPrimitiveDecimal;
  _from?: IElement;

  to?: IPrimitiveDecimal;
  _to?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
