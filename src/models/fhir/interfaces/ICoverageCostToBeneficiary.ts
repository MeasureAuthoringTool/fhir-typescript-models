/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  ICoverageCostToBeneficiaryException,
  IMoney,
  ISimpleQuantity,
} from "../internal";

export interface ICoverageCostToBeneficiary extends IBackboneElement {
  type?: ICodeableConcept;

  valueQuantity?: ISimpleQuantity;
  
  valueMoney?: IMoney;

  exception?: Array<ICoverageCostToBeneficiaryException>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
