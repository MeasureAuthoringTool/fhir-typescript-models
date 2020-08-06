/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IConceptMapEquivalence,
  IConceptMapGroupElementTargetDependsOn,
  IElement,
  IPrimitiveCode,
  IPrimitiveString,
} from "../internal";

export interface IConceptMapGroupElementTarget extends IBackboneElement {
  code?: IPrimitiveCode;
  _code?: IElement;

  display?: IPrimitiveString;
  _display?: IElement;

  equivalence?: IConceptMapEquivalence;
  _equivalence?: IElement;

  comment?: IPrimitiveString;
  _comment?: IElement;

  dependsOn?: Array<IConceptMapGroupElementTargetDependsOn>;

  product?: Array<IConceptMapGroupElementTargetDependsOn>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
