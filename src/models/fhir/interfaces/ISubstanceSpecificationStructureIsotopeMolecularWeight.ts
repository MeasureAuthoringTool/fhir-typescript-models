/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IQuantity,
} from "../internal";

export interface ISubstanceSpecificationStructureIsotopeMolecularWeight extends IBackboneElement {
  method?: ICodeableConcept;

  type?: ICodeableConcept;

  amount?: IQuantity;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
