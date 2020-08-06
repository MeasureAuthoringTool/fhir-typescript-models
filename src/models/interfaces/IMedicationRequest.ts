/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IDosage,
  IElement,
  IIdentifier,
  IMedicationRequestDispenseRequest,
  IMedicationRequestIntent,
  IMedicationRequestPriority,
  IMedicationRequestStatus,
  IMedicationRequestSubstitution,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface IMedicationRequest extends IDomainResource {
  identifier?: Array<IIdentifier>;

  status?: IMedicationRequestStatus;
  _status?: IElement;

  statusReason?: ICodeableConcept;

  intent?: IMedicationRequestIntent;
  _intent?: IElement;

  category?: Array<ICodeableConcept>;

  priority?: IMedicationRequestPriority;
  _priority?: IElement;

  doNotPerform?: IPrimitiveBoolean;
  _doNotPerform?: IElement;

  reportedBoolean?: IPrimitiveBoolean;
  _reportedBoolean?: IElement;
  
  reportedReference?: IReference;

  medicationCodeableConcept?: ICodeableConcept;
  
  medicationReference?: IReference;

  subject?: IReference;

  encounter?: IReference;

  supportingInformation?: Array<IReference>;

  authoredOn?: IPrimitiveDateTime;
  _authoredOn?: IElement;

  requester?: IReference;

  performer?: IReference;

  performerType?: ICodeableConcept;

  recorder?: IReference;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  instantiatesCanonical?: Array<IPrimitiveCanonical>;
  _instantiatesCanonical?: Array<IElement | null>;

  instantiatesUri?: Array<IPrimitiveUri>;
  _instantiatesUri?: Array<IElement | null>;

  basedOn?: Array<IReference>;

  groupIdentifier?: IIdentifier;

  courseOfTherapyType?: ICodeableConcept;

  insurance?: Array<IReference>;

  note?: Array<IAnnotation>;

  dosageInstruction?: Array<IDosage>;

  dispenseRequest?: IMedicationRequestDispenseRequest;

  substitution?: IMedicationRequestSubstitution;

  priorPrescription?: IReference;

  detectedIssue?: Array<IReference>;

  eventHistory?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
