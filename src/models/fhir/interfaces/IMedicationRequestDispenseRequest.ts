/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IDuration,
  IElement,
  IMedicationRequestDispenseRequestInitialFill,
  IPeriod,
  IPrimitiveUnsignedInt,
  IReference,
  ISimpleQuantity,
} from "../internal";

export interface IMedicationRequestDispenseRequest extends IBackboneElement {
  initialFill?: IMedicationRequestDispenseRequestInitialFill;

  dispenseInterval?: IDuration;

  validityPeriod?: IPeriod;

  numberOfRepeatsAllowed?: IPrimitiveUnsignedInt;
  _numberOfRepeatsAllowed?: IElement;

  quantity?: ISimpleQuantity;

  expectedSupplyDuration?: IDuration;

  performer?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
