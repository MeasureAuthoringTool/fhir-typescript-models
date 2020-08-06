/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  ICoverageEligibilityRequestItemDiagnosis,
  IElement,
  IMoney,
  IPrimitivePositiveInt,
  IReference,
  ISimpleQuantity,
} from "../internal";

export interface ICoverageEligibilityRequestItem extends IBackboneElement {
  supportingInfoSequence?: Array<IPrimitivePositiveInt>;
  _supportingInfoSequence?: Array<IElement | null>;

  category?: ICodeableConcept;

  productOrService?: ICodeableConcept;

  modifier?: Array<ICodeableConcept>;

  provider?: IReference;

  quantity?: ISimpleQuantity;

  unitPrice?: IMoney;

  facility?: IReference;

  diagnosis?: Array<ICoverageEligibilityRequestItemDiagnosis>;

  detail?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
