/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  IBackboneElement,
  ICarePlanActivityDetail,
  ICodeableConcept,
  IReference,
} from "../internal";

export interface ICarePlanActivity extends IBackboneElement {
  outcomeCodeableConcept?: Array<ICodeableConcept>;

  outcomeReference?: Array<IReference>;

  progress?: Array<IAnnotation>;

  reference?: IReference;

  detail?: ICarePlanActivityDetail;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
