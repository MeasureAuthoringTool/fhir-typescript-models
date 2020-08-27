/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IIdentifier,
  IQuantity,
} from "../internal";

export interface IProductShelfLife extends IBackboneElement {
  identifier?: IIdentifier;

  type?: ICodeableConcept;

  period?: IQuantity;

  specialPrecautionsForStorage?: Array<ICodeableConcept>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
