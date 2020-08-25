/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAge,
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IFamilyHistoryStatus,
  IFamilyMemberHistoryCondition,
  IIdentifier,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveDate,
  IPrimitiveDateTime,
  IPrimitiveString,
  IPrimitiveUri,
  IRange,
  IReference,
} from "../internal";

export interface IFamilyMemberHistory extends IDomainResource {
  identifier?: Array<IIdentifier>;

  instantiatesCanonical?: Array<IPrimitiveCanonical>;
  _instantiatesCanonical?: Array<IElement | null>;

  instantiatesUri?: Array<IPrimitiveUri>;
  _instantiatesUri?: Array<IElement | null>;

  status?: IFamilyHistoryStatus;
  _status?: IElement;

  dataAbsentReason?: ICodeableConcept;

  patient?: IReference;

  date?: IPrimitiveDateTime;
  _date?: IElement;

  name?: IPrimitiveString;
  _name?: IElement;

  relationship?: ICodeableConcept;

  sex?: ICodeableConcept;

  bornPeriod?: IPeriod;
  
  bornDate?: IPrimitiveDate;
  _bornDate?: IElement;
  
  bornString?: IPrimitiveString;
  _bornString?: IElement;

  ageAge?: IAge;
  
  ageRange?: IRange;
  
  ageString?: IPrimitiveString;
  _ageString?: IElement;

  estimatedAge?: IPrimitiveBoolean;
  _estimatedAge?: IElement;

  deceasedBoolean?: IPrimitiveBoolean;
  _deceasedBoolean?: IElement;
  
  deceasedAge?: IAge;
  
  deceasedRange?: IRange;
  
  deceasedDate?: IPrimitiveDate;
  _deceasedDate?: IElement;
  
  deceasedString?: IPrimitiveString;
  _deceasedString?: IElement;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  note?: Array<IAnnotation>;

  condition?: Array<IFamilyMemberHistoryCondition>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
