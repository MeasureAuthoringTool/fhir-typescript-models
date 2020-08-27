/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IPrimitiveInteger,
  IPrimitiveString,
  ISubstanceProteinSubunit,
} from "../internal";

export interface ISubstanceProtein extends IDomainResource {
  sequenceType?: ICodeableConcept;

  numberOfSubunits?: IPrimitiveInteger;
  _numberOfSubunits?: IElement;

  disulfideLinkage?: Array<IPrimitiveString>;
  _disulfideLinkage?: Array<IElement | null>;

  subunit?: Array<ISubstanceProteinSubunit>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
