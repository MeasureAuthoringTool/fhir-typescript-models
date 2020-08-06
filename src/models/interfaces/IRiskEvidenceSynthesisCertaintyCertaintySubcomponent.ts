/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  IBackboneElement,
  ICodeableConcept,
} from "../internal";

export interface IRiskEvidenceSynthesisCertaintyCertaintySubcomponent extends IBackboneElement {
  type?: ICodeableConcept;

  rating?: Array<ICodeableConcept>;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
