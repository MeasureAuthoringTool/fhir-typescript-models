/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  ICarePlanActivityKind,
  ICarePlanActivityStatus,
  ICodeableConcept,
  IElement,
  IPeriod,
  IPrimitiveBoolean,
  IPrimitiveCanonical,
  IPrimitiveString,
  IPrimitiveUri,
  IReference,
  ISimpleQuantity,
  ITiming,
} from "../internal";

export interface ICarePlanActivityDetail extends IBackboneElement {
  kind?: ICarePlanActivityKind;
  _kind?: IElement;

  instantiatesCanonical?: Array<IPrimitiveCanonical>;
  _instantiatesCanonical?: Array<IElement | null>;

  instantiatesUri?: Array<IPrimitiveUri>;
  _instantiatesUri?: Array<IElement | null>;

  code?: ICodeableConcept;

  reasonCode?: Array<ICodeableConcept>;

  reasonReference?: Array<IReference>;

  goal?: Array<IReference>;

  status?: ICarePlanActivityStatus;
  _status?: IElement;

  statusReason?: ICodeableConcept;

  doNotPerform?: IPrimitiveBoolean;
  _doNotPerform?: IElement;

  scheduledTiming?: ITiming;
  
  scheduledPeriod?: IPeriod;
  
  scheduledString?: IPrimitiveString;
  _scheduledString?: IElement;

  location?: IReference;

  performer?: Array<IReference>;

  productCodeableConcept?: ICodeableConcept;
  
  productReference?: IReference;

  dailyAmount?: ISimpleQuantity;

  quantity?: ISimpleQuantity;

  description?: IPrimitiveString;
  _description?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
