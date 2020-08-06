/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IBiologicallyDerivedProductStorageScale,
  IElement,
  IPeriod,
  IPrimitiveDecimal,
  IPrimitiveString,
} from "../internal";

export interface IBiologicallyDerivedProductStorage extends IBackboneElement {
  description?: IPrimitiveString;
  _description?: IElement;

  temperature?: IPrimitiveDecimal;
  _temperature?: IElement;

  scale?: IBiologicallyDerivedProductStorageScale;
  _scale?: IElement;

  duration?: IPeriod;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
