/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IDaysOfWeek,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveTime,
} from "../internal";

export interface IPractitionerRoleAvailableTime extends IBackboneElement {
  daysOfWeek?: Array<IDaysOfWeek>;
  _daysOfWeek?: Array<IElement | null>;

  allDay?: IPrimitiveBoolean;
  _allDay?: IElement;

  availableStartTime?: IPrimitiveTime;
  _availableStartTime?: IElement;

  availableEndTime?: IPrimitiveTime;
  _availableEndTime?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
