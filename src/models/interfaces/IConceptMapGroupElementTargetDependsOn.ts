/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveCanonical,
  IPrimitiveString,
  IPrimitiveUri,
} from "../internal";

export interface IConceptMapGroupElementTargetDependsOn extends IBackboneElement {
  property?: IPrimitiveUri;
  _property?: IElement;

  system?: IPrimitiveCanonical;
  _system?: IElement;

  value?: IPrimitiveString;
  _value?: IElement;

  display?: IPrimitiveString;
  _display?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
