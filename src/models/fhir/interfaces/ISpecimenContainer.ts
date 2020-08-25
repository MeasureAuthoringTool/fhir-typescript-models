/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPrimitiveString,
  IReference,
  ISimpleQuantity,
} from "../internal";

export interface ISpecimenContainer extends IBackboneElement {
  identifier?: Array<IIdentifier>;

  description?: IPrimitiveString;
  _description?: IElement;

  type?: ICodeableConcept;

  capacity?: ISimpleQuantity;

  specimenQuantity?: ISimpleQuantity;

  additiveCodeableConcept?: ICodeableConcept;
  
  additiveReference?: IReference;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
