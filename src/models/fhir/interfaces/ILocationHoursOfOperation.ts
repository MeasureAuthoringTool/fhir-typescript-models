/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBackboneElement,
  IDaysOfWeek,
  IElement,
  IPrimitiveBoolean,
  IPrimitiveTime,
} from "../internal";

export interface ILocationHoursOfOperation extends IBackboneElement {
  daysOfWeek?: Array<IDaysOfWeek>;
  _daysOfWeek?: Array<IElement | null>;

  allDay?: IPrimitiveBoolean;
  _allDay?: IElement;

  openingTime?: IPrimitiveTime;
  _openingTime?: IElement;

  closingTime?: IPrimitiveTime;
  _closingTime?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
