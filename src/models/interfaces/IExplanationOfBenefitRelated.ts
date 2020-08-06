/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IIdentifier,
  IReference,
} from "../internal";

export interface IExplanationOfBenefitRelated extends IBackboneElement {
  claim?: IReference;

  relationship?: ICodeableConcept;

  reference?: IIdentifier;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
