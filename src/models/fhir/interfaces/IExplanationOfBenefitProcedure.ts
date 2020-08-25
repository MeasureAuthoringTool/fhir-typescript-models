/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveDateTime,
  IPrimitivePositiveInt,
  IReference,
} from "../internal";

export interface IExplanationOfBenefitProcedure extends IBackboneElement {
  sequence?: IPrimitivePositiveInt;
  _sequence?: IElement;

  type?: Array<ICodeableConcept>;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  procedureCodeableConcept?: ICodeableConcept;
  
  procedureReference?: IReference;

  udi?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
