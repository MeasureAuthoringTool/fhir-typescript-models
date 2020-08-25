/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IProdCharacteristic,
  IQuantity,
  IReference,
} from "../internal";

export interface IMedicinalProductManufactured extends IDomainResource {
  manufacturedDoseForm?: ICodeableConcept;

  unitOfPresentation?: ICodeableConcept;

  quantity?: IQuantity;

  manufacturer?: Array<IReference>;

  ingredient?: Array<IReference>;

  physicalCharacteristics?: IProdCharacteristic;

  otherCharacteristics?: Array<ICodeableConcept>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
