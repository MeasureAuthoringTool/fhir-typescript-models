/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAddress,
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveDate,
  IReference,
} from "../internal";

export interface IClaimAccident extends IBackboneElement {
  date?: IPrimitiveDate;
  _date?: IElement;

  type?: ICodeableConcept;

  locationAddress?: IAddress;
  
  locationReference?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
