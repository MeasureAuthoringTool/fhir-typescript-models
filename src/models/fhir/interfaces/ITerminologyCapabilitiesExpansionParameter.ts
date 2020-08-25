/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveCode,
  IPrimitiveString,
} from "../internal";

export interface ITerminologyCapabilitiesExpansionParameter extends IBackboneElement {
  name?: IPrimitiveCode;
  _name?: IElement;

  documentation?: IPrimitiveString;
  _documentation?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
