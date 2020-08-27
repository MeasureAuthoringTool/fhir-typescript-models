/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IMedicationAdministrationDosage,
  IMedicationAdministrationPerformer,
  IMedicationAdministrationStatus,
  IPeriod,
  IPrimitiveDateTime,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface IMedicationAdministration extends IDomainResource {
  identifier?: Array<IIdentifier>;

  instantiates?: Array<IPrimitiveUri>;
  _instantiates?: Array<IElement | null>;

  partOf?: Array<IReference>;

  status?: IMedicationAdministrationStatus;
  _status?: IElement;

  statusReason?: Array<ICodeableConcept>;

  category?: ICodeableConcept;

  medicationCodeableConcept?: ICodeableConcept;
  
  medicationReference?: IReference;

  subject?: IReference;

  context?: IReference;

  supportingInformation?: Array<IReference>;

  effectiveDateTime?: IPrimitiveDateTime;
  _effectiveDateTime?: IElement;
  
  effectivePeriod?: IPeriod;

  performer?: Array<IMedicationAdministrationPerformer>;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  request?: IReference;

  device?: Array<IReference>;

  note?: Array<IAnnotation>;

  dosage?: IMedicationAdministrationDosage;

  eventHistory?: Array<IReference>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
