/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveCode,
  IPrimitiveString,
  IValueSetComposeIncludeConceptDesignation,
} from "../internal";

export interface IValueSetComposeIncludeConcept extends IBackboneElement {
  code?: IPrimitiveCode;
  _code?: IElement;

  display?: IPrimitiveString;
  _display?: IElement;

  designation?: Array<IValueSetComposeIncludeConceptDesignation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
