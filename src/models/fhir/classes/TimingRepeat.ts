/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  DayOfWeek,
  Duration,
  Element,
  EventTiming,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  ITimingRepeat,
  Period,
  PrimitiveDecimal,
  PrimitivePositiveInt,
  PrimitiveTime,
  PrimitiveUnsignedInt,
  Range,
  UnitsOfTime,
  FhirType
} from "../internal";

@FhirType("TimingRepeat", "Element")
export class TimingRepeat extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Timing.Repeat";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("Duration", "Range", "Period")
  public bounds?: Duration | Range | Period;

  @FhirField("PrimitivePositiveInt")
  public count?: PrimitivePositiveInt;

  @FhirField("PrimitivePositiveInt")
  public countMax?: PrimitivePositiveInt;

  @FhirField("PrimitiveDecimal")
  public duration?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public durationMax?: PrimitiveDecimal;

  @FhirField("UnitsOfTime")
  public durationUnit?: UnitsOfTime;

  @FhirField("PrimitivePositiveInt")
  public frequency?: PrimitivePositiveInt;

  @FhirField("PrimitivePositiveInt")
  public frequencyMax?: PrimitivePositiveInt;

  @FhirField("PrimitiveDecimal")
  public period?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public periodMax?: PrimitiveDecimal;

  @FhirField("UnitsOfTime")
  public periodUnit?: UnitsOfTime;

  @FhirList("DayOfWeek")
  public dayOfWeek?: Array<DayOfWeek>;

  @FhirList("PrimitiveTime")
  public timeOfDay?: Array<PrimitiveTime>;

  @FhirList("EventTiming")
  public when?: Array<EventTiming>;

  @FhirField("PrimitiveUnsignedInt")
  public offset?: PrimitiveUnsignedInt;

  public static parse(
    json: ITimingRepeat,
    providedInstance: TimingRepeat = new TimingRepeat()
  ): TimingRepeat {
    const newInstance: TimingRepeat = Element.parse(json, providedInstance);
  
    if (json.boundsDuration !== undefined) {
      newInstance.bounds = Duration.parse(json.boundsDuration);
    }
    if (json.boundsRange !== undefined) {
      newInstance.bounds = Range.parse(json.boundsRange);
    }
    if (json.boundsPeriod !== undefined) {
      newInstance.bounds = Period.parse(json.boundsPeriod);
    }
    if (json.count !== undefined) {
      newInstance.count = PrimitivePositiveInt.parsePrimitive(json.count, json._count);
    }
    if (json.countMax !== undefined) {
      newInstance.countMax = PrimitivePositiveInt.parsePrimitive(json.countMax, json._countMax);
    }
    if (json.duration !== undefined) {
      newInstance.duration = PrimitiveDecimal.parsePrimitive(json.duration, json._duration);
    }
    if (json.durationMax !== undefined) {
      newInstance.durationMax = PrimitiveDecimal.parsePrimitive(json.durationMax, json._durationMax);
    }
    if (json.durationUnit !== undefined) {
      newInstance.durationUnit = UnitsOfTime.parsePrimitive(json.durationUnit, json._durationUnit);
    }
    if (json.frequency !== undefined) {
      newInstance.frequency = PrimitivePositiveInt.parsePrimitive(json.frequency, json._frequency);
    }
    if (json.frequencyMax !== undefined) {
      newInstance.frequencyMax = PrimitivePositiveInt.parsePrimitive(json.frequencyMax, json._frequencyMax);
    }
    if (json.period !== undefined) {
      newInstance.period = PrimitiveDecimal.parsePrimitive(json.period, json._period);
    }
    if (json.periodMax !== undefined) {
      newInstance.periodMax = PrimitiveDecimal.parsePrimitive(json.periodMax, json._periodMax);
    }
    if (json.periodUnit !== undefined) {
      newInstance.periodUnit = UnitsOfTime.parsePrimitive(json.periodUnit, json._periodUnit);
    }
    if (json.dayOfWeek !== undefined) {
      newInstance.dayOfWeek = json.dayOfWeek.map((x, i) => DayOfWeek.parsePrimitive(x, json._dayOfWeek?.[i]));
    }
    if (json.timeOfDay !== undefined) {
      newInstance.timeOfDay = json.timeOfDay.map((x, i) => PrimitiveTime.parsePrimitive(x, json._timeOfDay?.[i]));
    }
    if (json.when !== undefined) {
      newInstance.when = json.when.map((x, i) => EventTiming.parsePrimitive(x, json._when?.[i]));
    }
    if (json.offset !== undefined) {
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

  public clone(): TimingRepeat {
    return TimingRepeat.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TimingRepeat";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
