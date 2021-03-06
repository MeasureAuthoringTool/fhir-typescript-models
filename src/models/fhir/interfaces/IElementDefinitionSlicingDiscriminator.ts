/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDiscriminatorType,
  IElement,
  IPrimitiveString,
} from "../internal";

export interface IElementDefinitionSlicingDiscriminator extends IElement {
  type?: IDiscriminatorType;
  _type?: IElement;

  path?: IPrimitiveString;
  _path?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
