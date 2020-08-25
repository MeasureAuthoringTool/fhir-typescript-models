/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IChargeItemDefinitionApplicability,
  IChargeItemDefinitionPropertyGroupPriceComponent,
} from "../internal";

export interface IChargeItemDefinitionPropertyGroup extends IBackboneElement {
  applicability?: Array<IChargeItemDefinitionApplicability>;

  priceComponent?: Array<IChargeItemDefinitionPropertyGroupPriceComponent>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
