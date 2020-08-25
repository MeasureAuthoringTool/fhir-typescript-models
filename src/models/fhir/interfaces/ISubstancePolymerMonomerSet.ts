/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  ISubstancePolymerMonomerSetStartingMaterial,
} from "../internal";

export interface ISubstancePolymerMonomerSet extends IBackboneElement {
  ratioType?: ICodeableConcept;

  startingMaterial?: Array<ISubstancePolymerMonomerSetStartingMaterial>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
