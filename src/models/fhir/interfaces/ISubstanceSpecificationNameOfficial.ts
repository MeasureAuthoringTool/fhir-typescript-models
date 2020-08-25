/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveDateTime,
} from "../internal";

export interface ISubstanceSpecificationNameOfficial extends IBackboneElement {
  authority?: ICodeableConcept;

  status?: ICodeableConcept;

  date?: IPrimitiveDateTime;
  _date?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
