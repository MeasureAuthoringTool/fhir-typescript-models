/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAge,
  IAnnotation,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveString,
  IPrimitiveUri,
  IProcedureFocalDevice,
  IProcedurePerformer,
  IProcedureStatus,
  IRange,
  IReference,
} from "../internal";

export interface IProcedure extends IDomainResource {
  identifier?: Array<IIdentifier>;

  instantiatesCanonical?: Array<IPrimitiveCanonical>;
  _instantiatesCanonical?: Array<IElement | null>;

  instantiatesUri?: Array<IPrimitiveUri>;
  _instantiatesUri?: Array<IElement | null>;

  basedOn?: Array<IReference>;

  partOf?: Array<IReference>;

  status?: IProcedureStatus;
  _status?: IElement;

  statusReason?: ICodeableConcept;

  category?: ICodeableConcept;

  code?: ICodeableConcept;

  subject?: IReference;

  encounter?: IReference;

  performedDateTime?: IPrimitiveDateTime;
  _performedDateTime?: IElement;
  
  performedPeriod?: IPeriod;
  
  performedString?: IPrimitiveString;
  _performedString?: IElement;
  
  performedAge?: IAge;
  
  performedRange?: IRange;

  recorder?: IReference;

  asserter?: IReference;

  performer?: Array<IProcedurePerformer>;

  location?: IReference;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  bodySite?: Array<ICodeableConcept>;

  outcome?: ICodeableConcept;

  report?: Array<IReference>;

  complication?: Array<ICodeableConcept>;

  complicationDetail?: Array<IReference>;

  followUp?: Array<ICodeableConcept>;

  note?: Array<IAnnotation>;

  focalDevice?: Array<IProcedureFocalDevice>;

  usedReference?: Array<IReference>;

  usedCode?: Array<ICodeableConcept>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
