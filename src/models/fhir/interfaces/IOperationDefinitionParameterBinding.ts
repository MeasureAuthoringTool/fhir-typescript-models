/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IBindingStrength,
  IElement,
  IPrimitiveCanonical,
} from "../internal";

export interface IOperationDefinitionParameterBinding extends IBackboneElement {
  strength?: IBindingStrength;
  _strength?: IElement;

  valueSet?: IPrimitiveCanonical;
  _valueSet?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
