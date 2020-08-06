/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IDuration,
  IElement,
  IPeriod,
  IPrimitiveDateTime,
  IReference,
  ISimpleQuantity,
} from "../internal";

export interface ISpecimenCollection extends IBackboneElement {
  collector?: IReference;

  collectedDateTime?: IPrimitiveDateTime;
  _collectedDateTime?: IElement;
  
  collectedPeriod?: IPeriod;

  duration?: IDuration;

  quantity?: ISimpleQuantity;

  method?: ICodeableConcept;

  bodySite?: ICodeableConcept;

  fastingStatusCodeableConcept?: ICodeableConcept;
  
  fastingStatusDuration?: IDuration;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
