/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IAnnotation,
  ICarePlanActivity,
  ICarePlanIntent,
  ICarePlanStatus,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPeriod,
  IPrimitiveCanonical,
  IPrimitiveDateTime,
  IPrimitiveString,
  IPrimitiveUri,
  IReference,
} from "../internal";

export interface ICarePlan extends IDomainResource {
  identifier?: Array<IIdentifier>;

  instantiatesCanonical?: Array<IPrimitiveCanonical>;
  _instantiatesCanonical?: Array<IElement | null>;

  instantiatesUri?: Array<IPrimitiveUri>;
  _instantiatesUri?: Array<IElement | null>;

  basedOn?: Array<IReference>;

  replaces?: Array<IReference>;

  partOf?: Array<IReference>;

  status?: ICarePlanStatus;
  _status?: IElement;

  intent?: ICarePlanIntent;
  _intent?: IElement;

  category?: Array<ICodeableConcept>;

  title?: IPrimitiveString;
  _title?: IElement;

  description?: IPrimitiveString;
  _description?: IElement;

  subject?: IReference;

  encounter?: IReference;

  period?: IPeriod;

  created?: IPrimitiveDateTime;
  _created?: IElement;

  author?: IReference;

  contributor?: Array<IReference>;

  careTeam?: Array<IReference>;

  addresses?: Array<IReference>;

  supportingInfo?: Array<IReference>;

  goal?: Array<IReference>;

  activity?: Array<ICarePlanActivity>;

  note?: Array<IAnnotation>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
