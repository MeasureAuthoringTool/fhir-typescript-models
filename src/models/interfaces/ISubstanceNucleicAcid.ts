/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IPrimitiveInteger,
  IPrimitiveString,
  ISubstanceNucleicAcidSubunit,
} from "../internal";

export interface ISubstanceNucleicAcid extends IDomainResource {
  sequenceType?: ICodeableConcept;

  numberOfSubunits?: IPrimitiveInteger;
  _numberOfSubunits?: IElement;

  areaOfHybridisation?: IPrimitiveString;
  _areaOfHybridisation?: IElement;

  oligoNucleotideType?: ICodeableConcept;

  subunit?: Array<ISubstanceNucleicAcidSubunit>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
