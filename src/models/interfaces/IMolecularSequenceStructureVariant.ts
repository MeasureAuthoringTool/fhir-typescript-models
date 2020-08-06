/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IMolecularSequenceStructureVariantInner,
  IMolecularSequenceStructureVariantOuter,
  IPrimitiveBoolean,
  IPrimitiveInteger,
} from "../internal";

export interface IMolecularSequenceStructureVariant extends IBackboneElement {
  variantType?: ICodeableConcept;

  exact?: IPrimitiveBoolean;
  _exact?: IElement;

  length?: IPrimitiveInteger;
  _length?: IElement;

  outer?: IMolecularSequenceStructureVariantOuter;

  inner?: IMolecularSequenceStructureVariantInner;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
