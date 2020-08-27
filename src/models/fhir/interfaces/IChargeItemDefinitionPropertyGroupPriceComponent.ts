/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IChargeItemDefinitionPriceComponentType,
  ICodeableConcept,
  IElement,
  IMoney,
  IPrimitiveDecimal,
} from "../internal";

export interface IChargeItemDefinitionPropertyGroupPriceComponent extends IBackboneElement {
  type?: IChargeItemDefinitionPriceComponentType;
  _type?: IElement;

  code?: ICodeableConcept;

  factor?: IPrimitiveDecimal;
  _factor?: IElement;

  amount?: IMoney;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
