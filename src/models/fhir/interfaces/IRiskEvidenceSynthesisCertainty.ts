/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  IBackboneElement,
  ICodeableConcept,
  IRiskEvidenceSynthesisCertaintyCertaintySubcomponent,
} from "../internal";

export interface IRiskEvidenceSynthesisCertainty extends IBackboneElement {
  rating?: Array<ICodeableConcept>;

  note?: Array<IAnnotation>;

  certaintySubcomponent?: Array<IRiskEvidenceSynthesisCertaintyCertaintySubcomponent>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
