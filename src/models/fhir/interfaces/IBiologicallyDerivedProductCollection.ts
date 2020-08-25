/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPeriod,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IBiologicallyDerivedProductCollection extends IBackboneElement {
  collector?: IReference;

  source?: IReference;

  collectedDateTime?: IPrimitiveDateTime;
  _collectedDateTime?: IElement;
  
  collectedPeriod?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
