/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveInteger,
  IPrimitiveString,
  IPrimitiveUri,
} from "../internal";

export interface ITestScriptMetadataCapability extends IBackboneElement {
  required?: IPrimitiveBoolean;
  _required?: IElement;

  validated?: IPrimitiveBoolean;
  _validated?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  origin?: Array<IPrimitiveInteger>;
  _origin?: Array<IElement | null>;

  destination?: IPrimitiveInteger;
  _destination?: IElement;

  link?: Array<IPrimitiveUri>;
  _link?: Array<IElement | null>;

  capabilities?: IPrimitiveCanonical;
  _capabilities?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
