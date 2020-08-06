/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICoding,
  IElement,
  IPrimitiveCode,
  IPrimitiveString,
} from "../internal";

export interface IValueSetComposeIncludeConceptDesignation extends IBackboneElement {
  language?: IPrimitiveCode;
  _language?: IElement;

  use?: ICoding;

  value?: IPrimitiveString;
  _value?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
