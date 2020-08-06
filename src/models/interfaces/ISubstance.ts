/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IFHIRSubstanceStatus,
  IIdentifier,
  IPrimitiveString,
  ISubstanceIngredient,
  ISubstanceInstance,
} from "../internal";

export interface ISubstance extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IFHIRSubstanceStatus;
  _status?: IElement;

  category?: Array<ICodeableConcept>;

  code?: ICodeableConcept;

  description?: IPrimitiveString;
  _description?: IElement;

  instance?: Array<ISubstanceInstance>;

  ingredient?: Array<ISubstanceIngredient>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
