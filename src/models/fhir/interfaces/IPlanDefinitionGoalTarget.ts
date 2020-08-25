/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IDuration,
  IQuantity,
  IRange,
} from "../internal";

export interface IPlanDefinitionGoalTarget extends IBackboneElement {
  measure?: ICodeableConcept;

  detailQuantity?: IQuantity;
  
  detailRange?: IRange;
  
  detailCodeableConcept?: ICodeableConcept;

  due?: IDuration;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
