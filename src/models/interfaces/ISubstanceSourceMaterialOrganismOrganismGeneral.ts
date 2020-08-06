/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
} from "../internal";

export interface ISubstanceSourceMaterialOrganismOrganismGeneral extends IBackboneElement {
  kingdom?: ICodeableConcept;

  phylum?: ICodeableConcept;

  class?: ICodeableConcept;

  order?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
