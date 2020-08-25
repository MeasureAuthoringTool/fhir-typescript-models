/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IMedicationBatch,
  IMedicationIngredient,
  IMedicationStatus,
  IRatio,
  IReference,
} from "../internal";

export interface IMedication extends IDomainResource {
  identifier?: Array<IIdentifier>;

  code?: ICodeableConcept;

  status?: IMedicationStatus;
  _status?: IElement;

  manufacturer?: IReference;

  form?: ICodeableConcept;

  amount?: IRatio;

  ingredient?: Array<IMedicationIngredient>;

  batch?: IMedicationBatch;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
