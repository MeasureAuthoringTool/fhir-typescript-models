/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IPrimitiveString,
  IReference,
  IStatus,
  ITiming,
  IVerificationResultAttestation,
  IVerificationResultPrimarySource,
  IVerificationResultValidator,
} from "../internal";

export interface IVerificationResult extends IDomainResource {
  target?: Array<IReference>;

  targetLocation?: Array<IPrimitiveString>;
  _targetLocation?: Array<IElement | null>;

  need?: ICodeableConcept;

  status?: IStatus;
  _status?: IElement;

  statusDate?: IPrimitiveDateTime;
  _statusDate?: IElement;

  validationType?: ICodeableConcept;

  validationProcess?: Array<ICodeableConcept>;

  frequency?: ITiming;

  lastPerformed?: IPrimitiveDateTime;
  _lastPerformed?: IElement;

  nextScheduled?: IPrimitiveDate;
  _nextScheduled?: IElement;

  failureAction?: ICodeableConcept;

  primarySource?: Array<IVerificationResultPrimarySource>;

  attestation?: IVerificationResultAttestation;

  validator?: Array<IVerificationResultValidator>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
