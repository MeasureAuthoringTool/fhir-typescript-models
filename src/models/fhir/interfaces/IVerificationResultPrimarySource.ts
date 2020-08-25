/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICodeableConcept,
  IElement,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IVerificationResultPrimarySource extends IBackboneElement {
  who?: IReference;

  type?: Array<ICodeableConcept>;

  communicationMethod?: Array<ICodeableConcept>;

  validationStatus?: ICodeableConcept;

  validationDate?: IPrimitiveDateTime;
  _validationDate?: IElement;

  canPushUpdates?: ICodeableConcept;

  pushTypeAvailable?: Array<ICodeableConcept>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
