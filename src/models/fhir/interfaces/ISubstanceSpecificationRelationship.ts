/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveString,
  IQuantity,
  IRange,
  IRatio,
  IReference,
} from "../internal";

export interface ISubstanceSpecificationRelationship extends IBackboneElement {
  substanceReference?: IReference;
  
  substanceCodeableConcept?: ICodeableConcept;

  relationship?: ICodeableConcept;

  isDefining?: IPrimitiveBoolean;
  _isDefining?: IElement;

  amountQuantity?: IQuantity;
  
  amountRange?: IRange;
  
  amountRatio?: IRatio;
  
  amountString?: IPrimitiveString;
  _amountString?: IElement;

  amountRatioLowLimit?: IRatio;

  amountType?: ICodeableConcept;

  source?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
