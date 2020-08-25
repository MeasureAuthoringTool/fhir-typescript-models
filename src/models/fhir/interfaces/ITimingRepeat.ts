/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IDayOfWeek,
  IDuration,
  IElement,
  IEventTiming,
  IPeriod,
  IPrimitiveDecimal,
  IPrimitivePositiveInt,
  IPrimitiveTime,
  IPrimitiveUnsignedInt,
  IRange,
  IUnitsOfTime,
} from "../internal";

export interface ITimingRepeat extends IElement {
  boundsDuration?: IDuration;
  
  boundsRange?: IRange;
  
  boundsPeriod?: IPeriod;

  count?: IPrimitivePositiveInt;
  _count?: IElement;

  countMax?: IPrimitivePositiveInt;
  _countMax?: IElement;

  duration?: IPrimitiveDecimal;
  _duration?: IElement;

  durationMax?: IPrimitiveDecimal;
  _durationMax?: IElement;

  durationUnit?: IUnitsOfTime;
  _durationUnit?: IElement;

  frequency?: IPrimitivePositiveInt;
  _frequency?: IElement;

  frequencyMax?: IPrimitivePositiveInt;
  _frequencyMax?: IElement;

  period?: IPrimitiveDecimal;
  _period?: IElement;

  periodMax?: IPrimitiveDecimal;
  _periodMax?: IElement;

  periodUnit?: IUnitsOfTime;
  _periodUnit?: IElement;

  dayOfWeek?: Array<IDayOfWeek>;
  _dayOfWeek?: Array<IElement | null>;

  timeOfDay?: Array<IPrimitiveTime>;
  _timeOfDay?: Array<IElement | null>;

  when?: Array<IEventTiming>;
  _when?: Array<IElement | null>;

  offset?: IPrimitiveUnsignedInt;
  _offset?: IElement;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
