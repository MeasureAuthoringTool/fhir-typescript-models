/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IReference,
  ISimpleQuantity,
} from "../internal";

export interface ISupplyDeliverySuppliedItem extends IBackboneElement {
  quantity?: ISimpleQuantity;

  itemCodeableConcept?: ICodeableConcept;
  
  itemReference?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
