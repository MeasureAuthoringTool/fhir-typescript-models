/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IElement,
  IElementDefinitionSlicingDiscriminator,
  IPrimitiveBoolean,
  IPrimitiveString,
  ISlicingRules,
} from "../internal";

export interface IElementDefinitionSlicing extends IElement {
  discriminator?: Array<IElementDefinitionSlicingDiscriminator>;

  description?: IPrimitiveString;
  _description?: IElement;

  ordered?: IPrimitiveBoolean;
  _ordered?: IElement;

  rules?: ISlicingRules;
  _rules?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
