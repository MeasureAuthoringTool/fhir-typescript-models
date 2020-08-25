/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveCode,
  IPrimitiveString,
} from "../internal";

export interface IImplementationGuideDefinitionTemplate extends IBackboneElement {
  code?: IPrimitiveCode;
  _code?: IElement;

  source?: IPrimitiveString;
  _source?: IElement;

  scope?: IPrimitiveString;
  _scope?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
