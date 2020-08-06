/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IImmunizationEducation,
  IImmunizationPerformer,
  IImmunizationProtocolApplied,
  IImmunizationReaction,
  IImmunizationStatus,
  IPrimitiveBoolean,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IPrimitiveString,
  IReference,
  ISimpleQuantity,
} from "../internal";

export interface IImmunization extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IImmunizationStatus;
  _status?: IElement;

  statusReason?: ICodeableConcept;

  vaccineCode?: ICodeableConcept;

  patient?: IReference;

  encounter?: IReference;

  occurrenceDateTime?: IPrimitiveDateTime;
  _occurrenceDateTime?: IElement;
  
  occurrenceString?: IPrimitiveString;
  _occurrenceString?: IElement;

  recorded?: IPrimitiveDateTime;
  _recorded?: IElement;

  primarySource?: IPrimitiveBoolean;
  _primarySource?: IElement;

  reportOrigin?: ICodeableConcept;

  location?: IReference;

  manufacturer?: IReference;

  lotNumber?: IPrimitiveString;
  _lotNumber?: IElement;

  expirationDate?: IPrimitiveDate;
  _expirationDate?: IElement;

  site?: ICodeableConcept;

  route?: ICodeableConcept;

  doseQuantity?: ISimpleQuantity;

  performer?: Array<IImmunizationPerformer>;

  note?: Array<IAnnotation>;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  isSubpotent?: IPrimitiveBoolean;
  _isSubpotent?: IElement;

  subpotentReason?: Array<ICodeableConcept>;

  education?: Array<IImmunizationEducation>;

  programEligibility?: Array<ICodeableConcept>;

  fundingSource?: ICodeableConcept;

  reaction?: Array<IImmunizationReaction>;

  protocolApplied?: Array<IImmunizationProtocolApplied>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
