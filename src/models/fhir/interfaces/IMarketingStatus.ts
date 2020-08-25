/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPeriod,
  IPrimitiveDateTime,
} from "../internal";

export interface IMarketingStatus extends IBackboneElement {
  country?: ICodeableConcept;

  jurisdiction?: ICodeableConcept;

  status?: ICodeableConcept;

  dateRange?: IPeriod;

  restoreDate?: IPrimitiveDateTime;
  _restoreDate?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
