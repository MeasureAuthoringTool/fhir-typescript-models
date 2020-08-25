/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IDosage,
  IElement,
  IIdentifier,
  IMedicationStatementStatus,
  IPeriod,
  IPrimitiveDateTime,
  IReference,
} from "../internal";

export interface IMedicationStatement extends IDomainResource {
  identifier?: Array<IIdentifier>;

  basedOn?: Array<IReference>;

  partOf?: Array<IReference>;

  status?: IMedicationStatementStatus;
  _status?: IElement;

  statusReason?: Array<ICodeableConcept>;

  category?: ICodeableConcept;

  medicationCodeableConcept?: ICodeableConcept;
  
  medicationReference?: IReference;

  subject?: IReference;

  context?: IReference;

  effectiveDateTime?: IPrimitiveDateTime;
  _effectiveDateTime?: IElement;
  
  effectivePeriod?: IPeriod;

  dateAsserted?: IPrimitiveDateTime;
  _dateAsserted?: IElement;

  informationSource?: IReference;

  derivedFrom?: Array<IReference>;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  note?: Array<IAnnotation>;

  dosage?: Array<IDosage>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
