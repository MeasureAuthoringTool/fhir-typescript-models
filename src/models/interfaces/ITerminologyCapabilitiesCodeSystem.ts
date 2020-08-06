/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  ITerminologyCapabilitiesCodeSystemVersion,
} from "../internal";

export interface ITerminologyCapabilitiesCodeSystem extends IBackboneElement {
  uri?: IPrimitiveCanonical;
  _uri?: IElement;

  version?: Array<ITerminologyCapabilitiesCodeSystemVersion>;

  subsumption?: IPrimitiveBoolean;
  _subsumption?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
