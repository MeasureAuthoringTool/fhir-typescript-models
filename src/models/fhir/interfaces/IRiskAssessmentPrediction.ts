/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPeriod,
  IPrimitiveDecimal,
  IPrimitiveString,
  IRange,
} from "../internal";

export interface IRiskAssessmentPrediction extends IBackboneElement {
  outcome?: ICodeableConcept;

  probabilityDecimal?: IPrimitiveDecimal;
  _probabilityDecimal?: IElement;
  
  probabilityRange?: IRange;

  qualitativeRisk?: ICodeableConcept;

  relativeRisk?: IPrimitiveDecimal;
  _relativeRisk?: IElement;

  whenPeriod?: IPeriod;
  
  whenRange?: IRange;

  rationale?: IPrimitiveString;
  _rationale?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
