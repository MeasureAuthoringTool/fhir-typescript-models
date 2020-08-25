/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveString,
  IReference,
  ISubstanceSpecificationCode,
  ISubstanceSpecificationMoiety,
  ISubstanceSpecificationName,
  ISubstanceSpecificationProperty,
  ISubstanceSpecificationRelationship,
  ISubstanceSpecificationStructure,
  ISubstanceSpecificationStructureIsotopeMolecularWeight,
} from "../internal";

export interface ISubstanceSpecification extends IDomainResource {
  identifier?: IIdentifier;

  type?: ICodeableConcept;

  status?: ICodeableConcept;

  domain?: ICodeableConcept;

  description?: IPrimitiveString;
  _description?: IElement;

  source?: Array<IReference>;

  comment?: IPrimitiveString;
  _comment?: IElement;

  moiety?: Array<ISubstanceSpecificationMoiety>;

  property?: Array<ISubstanceSpecificationProperty>;

  referenceInformation?: IReference;

  structure?: ISubstanceSpecificationStructure;

  code?: Array<ISubstanceSpecificationCode>;

  name?: Array<ISubstanceSpecificationName>;

  molecularWeight?: Array<ISubstanceSpecificationStructureIsotopeMolecularWeight>;

  relationship?: Array<ISubstanceSpecificationRelationship>;

  nucleicAcid?: IReference;

  polymer?: IReference;

  protein?: IReference;

  sourceMaterial?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
