/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitivePositiveInt,
  IReference,
} from "../internal";

export interface IEpisodeOfCareDiagnosis extends IBackboneElement {
  condition?: IReference;

  role?: ICodeableConcept;

  rank?: IPrimitivePositiveInt;
  _rank?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
