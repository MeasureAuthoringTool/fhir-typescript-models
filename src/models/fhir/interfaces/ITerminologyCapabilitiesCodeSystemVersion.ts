/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveCode,
  IPrimitiveString,
  ITerminologyCapabilitiesCodeSystemVersionFilter,
} from "../internal";

export interface ITerminologyCapabilitiesCodeSystemVersion extends IBackboneElement {
  code?: IPrimitiveString;
  _code?: IElement;

  isDefault?: IPrimitiveBoolean;
  _isDefault?: IElement;

  compositional?: IPrimitiveBoolean;
  _compositional?: IElement;

  language?: Array<IPrimitiveCode>;
  _language?: Array<IElement | null>;

  filter?: Array<ITerminologyCapabilitiesCodeSystemVersionFilter>;

  property?: Array<IPrimitiveCode>;
  _property?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
