/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveCode,
  IPrimitiveString,
  IPrimitiveUri,
  IValueSetComposeIncludeConceptDesignation,
} from "../internal";

export interface IValueSetExpansionContains extends IBackboneElement {
  system?: IPrimitiveUri;
  _system?: IElement;

  abstract?: IPrimitiveBoolean;
  _abstract?: IElement;

  inactive?: IPrimitiveBoolean;
  _inactive?: IElement;

  version?: IPrimitiveString;
  _version?: IElement;

  code?: IPrimitiveCode;
  _code?: IElement;

  display?: IPrimitiveString;
  _display?: IElement;

  designation?: Array<IValueSetComposeIncludeConceptDesignation>;

  contains?: Array<IValueSetExpansionContains>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
