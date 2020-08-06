/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IElement,
  IPrimitiveInteger,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IMolecularSequenceVariant extends IBackboneElement {
  start?: IPrimitiveInteger;
  _start?: IElement;

  end?: IPrimitiveInteger;
  _end?: IElement;

  observedAllele?: IPrimitiveString;
  _observedAllele?: IElement;

  referenceAllele?: IPrimitiveString;
  _referenceAllele?: IElement;

  cigar?: IPrimitiveString;
  _cigar?: IElement;

  variantPointer?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
