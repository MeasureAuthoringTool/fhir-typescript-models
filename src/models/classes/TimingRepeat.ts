/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  DayOfWeek,
  Duration,
  Element,
  EventTiming,
  Extension,
  ITimingRepeat,
  Period,
  PrimitiveDecimal,
  PrimitivePositiveInt,
  PrimitiveTime,
  PrimitiveUnsignedInt,
  Range,
  UnitsOfTime,
} from "../internal";

export class TimingRepeat extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Timing.Repeat";

  public bounds?: Duration | Range | Period;

  public count?: PrimitivePositiveInt;

  public countMax?: PrimitivePositiveInt;

  public duration?: PrimitiveDecimal;

  public durationMax?: PrimitiveDecimal;

  public durationUnit?: UnitsOfTime;

  public frequency?: PrimitivePositiveInt;

  public frequencyMax?: PrimitivePositiveInt;

  public period?: PrimitiveDecimal;

  public periodMax?: PrimitiveDecimal;

  public periodUnit?: UnitsOfTime;

  public dayOfWeek?: Array<DayOfWeek>;

  public timeOfDay?: Array<PrimitiveTime>;

  public when?: Array<EventTiming>;

  public offset?: PrimitiveUnsignedInt;

  public static parse(
    json: ITimingRepeat,
    providedInstance: TimingRepeat = new TimingRepeat()
  ): TimingRepeat {
    const newInstance: TimingRepeat = Element.parse(json, providedInstance);
  
    if (json.boundsDuration) {
      newInstance.bounds = Duration.parse(json.boundsDuration);
    }
    if (json.boundsRange) {
      newInstance.bounds = Range.parse(json.boundsRange);
    }
    if (json.boundsPeriod) {
      newInstance.bounds = Period.parse(json.boundsPeriod);
    }
    if (json.count) {
      newInstance.count = PrimitivePositiveInt.parsePrimitive(json.count, json._count);
    }
    if (json.countMax) {
      newInstance.countMax = PrimitivePositiveInt.parsePrimitive(json.countMax, json._countMax);
    }
    if (json.duration) {
      newInstance.duration = PrimitiveDecimal.parsePrimitive(json.duration, json._duration);
    }
    if (json.durationMax) {
      newInstance.durationMax = PrimitiveDecimal.parsePrimitive(json.durationMax, json._durationMax);
    }
    if (json.durationUnit) {
      newInstance.durationUnit = UnitsOfTime.parsePrimitive(json.durationUnit, json._durationUnit);
    }
    if (json.frequency) {
      newInstance.frequency = PrimitivePositiveInt.parsePrimitive(json.frequency, json._frequency);
    }
    if (json.frequencyMax) {
      newInstance.frequencyMax = PrimitivePositiveInt.parsePrimitive(json.frequencyMax, json._frequencyMax);
    }
    if (json.period) {
      newInstance.period = PrimitiveDecimal.parsePrimitive(json.period, json._period);
    }
    if (json.periodMax) {
      newInstance.periodMax = PrimitiveDecimal.parsePrimitive(json.periodMax, json._periodMax);
    }
    if (json.periodUnit) {
      newInstance.periodUnit = UnitsOfTime.parsePrimitive(json.periodUnit, json._periodUnit);
    }
    if (json.dayOfWeek) {
      newInstance.dayOfWeek = json.dayOfWeek.map((x, i) => {
        const ext = json._dayOfWeek && json._dayOfWeek[i];
        return DayOfWeek.parsePrimitive(x, ext);
      });
    }
    if (json.timeOfDay) {
      newInstance.timeOfDay = json.timeOfDay.map((x, i) => {
        const ext = json._timeOfDay && json._timeOfDay[i];
        return PrimitiveTime.parsePrimitive(x, ext);
      });
    }
    if (json.when) {
      newInstance.when = json.when.map((x, i) => {
        const ext = json._when && json._when[i];
        return EventTiming.parsePrimitive(x, ext);
      });
    }
    if (json.offset) {
      newInstance.offset = PrimitiveUnsignedInt.parsePrimitive(json.offset, json._offset);
    }
    return newInstance;
  }

  public static isTimingRepeat(input?: unknown): input is TimingRepeat {
    const castInput = input as TimingRepeat;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TimingRepeat";
  }

  public toJSON(): ITimingRepeat {
    const result: ITimingRepeat = super.toJSON();

    if (this.bounds && Duration.isDuration(this.bounds)) {
      result.boundsDuration = this.bounds.toJSON();
    }

    if (this.bounds && Range.isRange(this.bounds)) {
      result.boundsRange = this.bounds.toJSON();
    }

    if (this.bounds && Period.isPeriod(this.bounds)) {
      result.boundsPeriod = this.bounds.toJSON();
    }

    if (this.count) {
      result.count = this.count.value;
      result._count = Extension.serializePrimitiveExtension(this.count);
    }

    if (this.countMax) {
      result.countMax = this.countMax.value;
      result._countMax = Extension.serializePrimitiveExtension(this.countMax);
    }

    if (this.duration) {
      result.duration = this.duration.value;
      result._duration = Extension.serializePrimitiveExtension(this.duration);
    }

    if (this.durationMax) {
      result.durationMax = this.durationMax.value;
      result._durationMax = Extension.serializePrimitiveExtension(this.durationMax);
    }

    if (this.durationUnit) {
      result.durationUnit = this.durationUnit.value;
      result._durationUnit = Extension.serializePrimitiveExtension(this.durationUnit);
    }

    if (this.frequency) {
      result.frequency = this.frequency.value;
      result._frequency = Extension.serializePrimitiveExtension(this.frequency);
    }

    if (this.frequencyMax) {
      result.frequencyMax = this.frequencyMax.value;
      result._frequencyMax = Extension.serializePrimitiveExtension(this.frequencyMax);
    }

    if (this.period) {
      result.period = this.period.value;
      result._period = Extension.serializePrimitiveExtension(this.period);
    }

    if (this.periodMax) {
      result.periodMax = this.periodMax.value;
      result._periodMax = Extension.serializePrimitiveExtension(this.periodMax);
    }

    if (this.periodUnit) {
      result.periodUnit = this.periodUnit.value;
      result._periodUnit = Extension.serializePrimitiveExtension(this.periodUnit);
    }

    if (this.dayOfWeek) {
      result.dayOfWeek = this.dayOfWeek.filter(x => !!x).map(x => x.value) as typeof result.dayOfWeek;
      result._dayOfWeek = Extension.serializePrimitiveExtensionArray(this.dayOfWeek);
    }

    if (this.timeOfDay) {
      result.timeOfDay = this.timeOfDay.filter(x => !!x).map(x => x.value) as typeof result.timeOfDay;
      result._timeOfDay = Extension.serializePrimitiveExtensionArray(this.timeOfDay);
    }

    if (this.when) {
      result.when = this.when.filter(x => !!x).map(x => x.value) as typeof result.when;
      result._when = Extension.serializePrimitiveExtensionArray(this.when);
    }

    if (this.offset) {
      result.offset = this.offset.value;
      result._offset = Extension.serializePrimitiveExtension(this.offset);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "TimingRepeat";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
