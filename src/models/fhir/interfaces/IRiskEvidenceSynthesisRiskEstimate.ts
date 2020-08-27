/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveDecimal,
  IPrimitiveInteger,
  IPrimitiveString,
  IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate,
} from "../internal";

export interface IRiskEvidenceSynthesisRiskEstimate extends IBackboneElement {
  description?: IPrimitiveString;
  _description?: IElement;

  type?: ICodeableConcept;

  value?: IPrimitiveDecimal;
  _value?: IElement;

  unitOfMeasure?: ICodeableConcept;

  denominatorCount?: IPrimitiveInteger;
  _denominatorCount?: IElement;

  numeratorCount?: IPrimitiveInteger;
  _numeratorCount?: IElement;

  precisionEstimate?: Array<IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
