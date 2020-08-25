/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IRatio,
  IReference,
} from "../internal";

export interface ISubstanceIngredient extends IBackboneElement {
  quantity?: IRatio;

  substanceCodeableConcept?: ICodeableConcept;
  
  substanceReference?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
