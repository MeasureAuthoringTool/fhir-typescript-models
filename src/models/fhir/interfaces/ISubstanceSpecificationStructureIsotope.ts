/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IIdentifier,
  IQuantity,
  ISubstanceSpecificationStructureIsotopeMolecularWeight,
} from "../internal";

export interface ISubstanceSpecificationStructureIsotope extends IBackboneElement {
  identifier?: IIdentifier;

  name?: ICodeableConcept;

  substitution?: ICodeableConcept;

  halfLife?: IQuantity;

  molecularWeight?: ISubstanceSpecificationStructureIsotopeMolecularWeight;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
