/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IFHIRAllTypes,
  IParameterUse,
  IPrimitiveCanonical,
  IPrimitiveCode,
  IPrimitiveInteger,
  IPrimitiveString,
} from "../internal";

export interface IParameterDefinition extends IElement {
  name?: IPrimitiveCode;
  _name?: IElement;

  use?: IParameterUse;
  _use?: IElement;

  min?: IPrimitiveInteger;
  _min?: IElement;

  max?: IPrimitiveString;
  _max?: IElement;

  documentation?: IPrimitiveString;
  _documentation?: IElement;

  type?: IFHIRAllTypes;
  _type?: IElement;

  profile?: IPrimitiveCanonical;
  _profile?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
