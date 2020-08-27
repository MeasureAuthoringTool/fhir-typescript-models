/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IGuideParameterCode,
  IPrimitiveString,
} from "../internal";

export interface IImplementationGuideDefinitionParameter extends IBackboneElement {
  code?: IGuideParameterCode;
  _code?: IElement;

  value?: IPrimitiveString;
  _value?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
