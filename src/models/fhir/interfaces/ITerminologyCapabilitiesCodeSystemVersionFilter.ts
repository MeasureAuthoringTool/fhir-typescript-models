/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveCode,
} from "../internal";

export interface ITerminologyCapabilitiesCodeSystemVersionFilter extends IBackboneElement {
  code?: IPrimitiveCode;
  _code?: IElement;

  op?: Array<IPrimitiveCode>;
  _op?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
