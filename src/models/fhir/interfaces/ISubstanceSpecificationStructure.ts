/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  IReference,
  ISubstanceSpecificationStructureIsotope,
  ISubstanceSpecificationStructureIsotopeMolecularWeight,
  ISubstanceSpecificationStructureRepresentation,
} from "../internal";

export interface ISubstanceSpecificationStructure extends IBackboneElement {
  stereochemistry?: ICodeableConcept;

  opticalActivity?: ICodeableConcept;

  molecularFormula?: IPrimitiveString;
  _molecularFormula?: IElement;

  molecularFormulaByMoiety?: IPrimitiveString;
  _molecularFormulaByMoiety?: IElement;

  isotope?: Array<ISubstanceSpecificationStructureIsotope>;

  molecularWeight?: ISubstanceSpecificationStructureIsotopeMolecularWeight;

  source?: Array<IReference>;

  representation?: Array<ISubstanceSpecificationStructureRepresentation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
