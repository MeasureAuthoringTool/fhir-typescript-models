/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IExtensionContextType,
  IPrimitiveString,
} from "../internal";

export interface IStructureDefinitionContext extends IBackboneElement {
  type?: IExtensionContextType;
  _type?: IElement;

  expression?: IPrimitiveString;
  _expression?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
