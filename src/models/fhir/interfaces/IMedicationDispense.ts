/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IDosage,
  IElement,
  IIdentifier,
  IMedicationDispensePerformer,
  IMedicationDispenseStatus,
  IMedicationDispenseSubstitution,
  IPrimitiveDateTime,
  IReference,
  ISimpleQuantity,
} from "../internal";

export interface IMedicationDispense extends IDomainResource {
  identifier?: Array<IIdentifier>;

  partOf?: Array<IReference>;

  status?: IMedicationDispenseStatus;
  _status?: IElement;

  statusReasonCodeableConcept?: ICodeableConcept;
  
  statusReasonReference?: IReference;

  category?: ICodeableConcept;

  medicationCodeableConcept?: ICodeableConcept;
  
  medicationReference?: IReference;

  subject?: IReference;

  context?: IReference;

  supportingInformation?: Array<IReference>;

  performer?: Array<IMedicationDispensePerformer>;

  location?: IReference;

  authorizingPrescription?: Array<IReference>;

  type?: ICodeableConcept;

  quantity?: ISimpleQuantity;

  daysSupply?: ISimpleQuantity;

  whenPrepared?: IPrimitiveDateTime;
  _whenPrepared?: IElement;

  whenHandedOver?: IPrimitiveDateTime;
  _whenHandedOver?: IElement;

  destination?: IReference;

  receiver?: Array<IReference>;

  note?: Array<IAnnotation>;

  dosageInstruction?: Array<IDosage>;

  substitution?: IMedicationDispenseSubstitution;

  detectedIssue?: Array<IReference>;

  eventHistory?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
