/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IOrientationType,
  IPrimitiveInteger,
  IPrimitiveString,
  IReference,
  IStrandType,
} from "../internal";

export interface IMolecularSequenceReferenceSeq extends IBackboneElement {
  chromosome?: ICodeableConcept;

  genomeBuild?: IPrimitiveString;
  _genomeBuild?: IElement;

  orientation?: IOrientationType;
  _orientation?: IElement;

  referenceSeqId?: ICodeableConcept;

  referenceSeqPointer?: IReference;

  referenceSeqString?: IPrimitiveString;
  _referenceSeqString?: IElement;

  strand?: IStrandType;
  _strand?: IElement;

  windowStart?: IPrimitiveInteger;
  _windowStart?: IElement;

  windowEnd?: IPrimitiveInteger;
  _windowEnd?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
