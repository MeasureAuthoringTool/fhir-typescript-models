/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IExposureState,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IEffectEvidenceSynthesisResultsByExposure extends IBackboneElement {
  description?: IPrimitiveString;
  _description?: IElement;

  exposureState?: IExposureState;
  _exposureState?: IElement;

  variantState?: ICodeableConcept;

  riskEvidenceSynthesis?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
