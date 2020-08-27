/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IIdentifier,
  IProdCharacteristic,
  IProductShelfLife,
  IQuantity,
  IReference,
} from "../internal";

export interface IMedicinalProductPackagedPackageItem extends IBackboneElement {
  identifier?: Array<IIdentifier>;

  type?: ICodeableConcept;

  quantity?: IQuantity;

  material?: Array<ICodeableConcept>;

  alternateMaterial?: Array<ICodeableConcept>;

  device?: Array<IReference>;

  manufacturedItem?: Array<IReference>;

  packageItem?: Array<IMedicinalProductPackagedPackageItem>;

  physicalCharacteristics?: IProdCharacteristic;

  otherCharacteristics?: Array<ICodeableConcept>;

  shelfLifeStorage?: Array<IProductShelfLife>;

  manufacturer?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
