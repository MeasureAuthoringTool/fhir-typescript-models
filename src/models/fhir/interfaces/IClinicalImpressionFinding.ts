/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IClinicalImpressionFinding extends IBackboneElement {
  itemCodeableConcept?: ICodeableConcept;

  itemReference?: IReference;

  basis?: IPrimitiveString;
  _basis?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
