/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveDateTime,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface ISubstanceSpecificationCode extends IBackboneElement {
  code?: ICodeableConcept;

  status?: ICodeableConcept;

  statusDate?: IPrimitiveDateTime;
  _statusDate?: IElement;

  comment?: IPrimitiveString;
  _comment?: IElement;

  source?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
