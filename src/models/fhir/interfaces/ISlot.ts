/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveBoolean,
  IPrimitiveInstant,
  IPrimitiveString,
  IReference,
  ISlotStatus,
} from "../internal";

export interface ISlot extends IDomainResource {
  identifier?: Array<IIdentifier>;

  serviceCategory?: Array<ICodeableConcept>;

  serviceType?: Array<ICodeableConcept>;

  specialty?: Array<ICodeableConcept>;

  appointmentType?: ICodeableConcept;

  schedule?: IReference;

  status?: ISlotStatus;
  _status?: IElement;

  start?: IPrimitiveInstant;
  _start?: IElement;

  end?: IPrimitiveInstant;
  _end?: IElement;

  overbooked?: IPrimitiveBoolean;
  _overbooked?: IElement;

  comment?: IPrimitiveString;
  _comment?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
