/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IPrimitiveString,
  ISubstancePolymerMonomerSet,
  ISubstancePolymerRepeat,
} from "../internal";

export interface ISubstancePolymer extends IDomainResource {
  class?: ICodeableConcept;

  geometry?: ICodeableConcept;

  copolymerConnectivity?: Array<ICodeableConcept>;

  modification?: Array<IPrimitiveString>;
  _modification?: Array<IElement | null>;

  monomerSet?: Array<ISubstancePolymerMonomerSet>;

  repeat?: Array<ISubstancePolymerRepeat>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
