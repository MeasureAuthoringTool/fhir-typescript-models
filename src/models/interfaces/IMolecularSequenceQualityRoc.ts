/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveDecimal,
  IPrimitiveInteger,
} from "../internal";

export interface IMolecularSequenceQualityRoc extends IBackboneElement {
  score?: Array<IPrimitiveInteger>;
  _score?: Array<IElement | null>;

  numTP?: Array<IPrimitiveInteger>;
  _numTP?: Array<IElement | null>;

  numFP?: Array<IPrimitiveInteger>;
  _numFP?: Array<IElement | null>;

  numFN?: Array<IPrimitiveInteger>;
  _numFN?: Array<IElement | null>;

  precision?: Array<IPrimitiveDecimal>;
  _precision?: Array<IElement | null>;

  sensitivity?: Array<IPrimitiveDecimal>;
  _sensitivity?: Array<IElement | null>;

  fMeasure?: Array<IPrimitiveDecimal>;
  _fMeasure?: Array<IElement | null>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
