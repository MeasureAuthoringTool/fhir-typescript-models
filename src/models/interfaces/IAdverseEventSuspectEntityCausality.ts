/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IAdverseEventSuspectEntityCausality extends IBackboneElement {
  assessment?: ICodeableConcept;

  productRelatedness?: IPrimitiveString;
  _productRelatedness?: IElement;

  author?: IReference;

  method?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
