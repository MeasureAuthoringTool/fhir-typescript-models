/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  IBackboneElement,
  ICodeableConcept,
  IEffectEvidenceSynthesisCertaintyCertaintySubcomponent,
} from "../internal";

export interface IEffectEvidenceSynthesisCertainty extends IBackboneElement {
  rating?: Array<ICodeableConcept>;

  note?: Array<IAnnotation>;

  certaintySubcomponent?: Array<IEffectEvidenceSynthesisCertaintyCertaintySubcomponent>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
