/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IMedicinalProductInteractionInteractant,
  IPrimitiveString,
  IReference,
} from "../internal";

export interface IMedicinalProductInteraction extends IDomainResource {
  subject?: Array<IReference>;

  description?: IPrimitiveString;
  _description?: IElement;

  interactant?: Array<IMedicinalProductInteractionInteractant>;

  type?: ICodeableConcept;

  effect?: ICodeableConcept;

  incidence?: ICodeableConcept;

  management?: ICodeableConcept;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
