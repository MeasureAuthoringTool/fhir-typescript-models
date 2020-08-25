/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IMedicinalProductIngredientSpecifiedSubstance,
  IMedicinalProductIngredientSubstance,
  IPrimitiveBoolean,
  IReference,
} from "../internal";

export interface IMedicinalProductIngredient extends IDomainResource {
  identifier?: IIdentifier;

  role?: ICodeableConcept;

  allergenicIndicator?: IPrimitiveBoolean;
  _allergenicIndicator?: IElement;

  manufacturer?: Array<IReference>;

  specifiedSubstance?: Array<IMedicinalProductIngredientSpecifiedSubstance>;

  substance?: IMedicinalProductIngredientSubstance;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
