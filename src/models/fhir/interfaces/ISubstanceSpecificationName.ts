/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveString,
  IReference,
  ISubstanceSpecificationNameOfficial,
} from "../internal";

export interface ISubstanceSpecificationName extends IBackboneElement {
  name?: IPrimitiveString;
  _name?: IElement;

  type?: ICodeableConcept;

  status?: ICodeableConcept;

  preferred?: IPrimitiveBoolean;
  _preferred?: IElement;

  language?: Array<ICodeableConcept>;

  domain?: Array<ICodeableConcept>;

  jurisdiction?: Array<ICodeableConcept>;

  synonym?: Array<ISubstanceSpecificationName>;

  translation?: Array<ISubstanceSpecificationName>;

  official?: Array<ISubstanceSpecificationNameOfficial>;

  source?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
