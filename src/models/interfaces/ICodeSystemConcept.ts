/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeSystemConceptDesignation,
  ICodeSystemConceptProperty,
  IElement,
  IPrimitiveCode,
  IPrimitiveString,
} from "../internal";

export interface ICodeSystemConcept extends IBackboneElement {
  code?: IPrimitiveCode;
  _code?: IElement;

  display?: IPrimitiveString;
  _display?: IElement;

  definition?: IPrimitiveString;
  _definition?: IElement;

  designation?: Array<ICodeSystemConceptDesignation>;

  property?: Array<ICodeSystemConceptProperty>;

  concept?: Array<ICodeSystemConcept>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
