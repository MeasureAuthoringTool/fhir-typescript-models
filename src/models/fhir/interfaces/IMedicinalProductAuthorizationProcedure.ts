/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveDateTime,
} from "../internal";

export interface IMedicinalProductAuthorizationProcedure extends IBackboneElement {
  identifier?: IIdentifier;

  type?: ICodeableConcept;

  datePeriod?: IPeriod;
  
  dateDateTime?: IPrimitiveDateTime;
  _dateDateTime?: IElement;

  application?: Array<IMedicinalProductAuthorizationProcedure>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
