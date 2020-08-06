/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate,
  IElement,
  IPrimitiveDecimal,
  IPrimitiveString,
} from "../internal";

export interface IEffectEvidenceSynthesisEffectEstimate extends IBackboneElement {
  description?: IPrimitiveString;
  _description?: IElement;

  type?: ICodeableConcept;

  variantState?: ICodeableConcept;

  value?: IPrimitiveDecimal;
  _value?: IElement;

  unitOfMeasure?: ICodeableConcept;

  precisionEstimate?: Array<IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
