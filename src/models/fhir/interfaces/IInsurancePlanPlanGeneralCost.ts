/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IMoney,
  IPrimitivePositiveInt,
  IPrimitiveString,
} from "../internal";

export interface IInsurancePlanPlanGeneralCost extends IBackboneElement {
  type?: ICodeableConcept;

  groupSize?: IPrimitivePositiveInt;
  _groupSize?: IElement;

  cost?: IMoney;

  comment?: IPrimitiveString;
  _comment?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
