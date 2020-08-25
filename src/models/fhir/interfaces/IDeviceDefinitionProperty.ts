/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IQuantity,
} from "../internal";

export interface IDeviceDefinitionProperty extends IBackboneElement {
  type?: ICodeableConcept;

  valueQuantity?: Array<IQuantity>;

  valueCode?: Array<ICodeableConcept>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
