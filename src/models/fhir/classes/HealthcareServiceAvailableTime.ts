/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  DaysOfWeek,
  Extension,
  FhirField,
  FhirList,
  IHealthcareServiceAvailableTime,
  PrimitiveBoolean,
  PrimitiveTime,
  FhirType
} from "../internal";

@FhirType("HealthcareServiceAvailableTime", "BackboneElement")
export class HealthcareServiceAvailableTime extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "HealthcareService.AvailableTime";

  static readonly primaryCodePath: string | null = null;

  @FhirList("DaysOfWeek")
  public daysOfWeek?: Array<DaysOfWeek>;

  @FhirField("PrimitiveBoolean")
  public allDay?: PrimitiveBoolean;

  @FhirField("PrimitiveTime")
  public availableStartTime?: PrimitiveTime;

  @FhirField("PrimitiveTime")
  public availableEndTime?: PrimitiveTime;

  public static parse(
    json: IHealthcareServiceAvailableTime,
    providedInstance: HealthcareServiceAvailableTime = new HealthcareServiceAvailableTime()
  ): HealthcareServiceAvailableTime {
    const newInstance: HealthcareServiceAvailableTime = BackboneElement.parse(json, providedInstance);
  
    if (json.daysOfWeek !== undefined) {
      newInstance.daysOfWeek = json.daysOfWeek.map((x, i) => DaysOfWeek.parsePrimitive(x, json._daysOfWeek?.[i]));
    }
    if (json.allDay !== undefined) {
      newInstance.allDay = PrimitiveBoolean.parsePrimitive(json.allDay, json._allDay);
    }
    if (json.availableStartTime !== undefined) {
      newInstance.availableStartTime = PrimitiveTime.parsePrimitive(json.availableStartTime, json._availableStartTime);
    }
    if (json.availableEndTime !== undefined) {
      newInstance.availableEndTime = PrimitiveTime.parsePrimitive(json.availableEndTime, json._availableEndTime);
    }
    return newInstance;
  }

  public static isHealthcareServiceAvailableTime(input?: unknown): input is HealthcareServiceAvailableTime {
    const castInput = input as HealthcareServiceAvailableTime;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "HealthcareServiceAvailableTime";
  }

  public toJSON(): IHealthcareServiceAvailableTime {
    const result: IHealthcareServiceAvailableTime = super.toJSON();

    if (this.daysOfWeek) {
      result.daysOfWeek = this.daysOfWeek.filter(x => !!x).map(x => x.value) as typeof result.daysOfWeek;
      result._daysOfWeek = Extension.serializePrimitiveExtensionArray(this.daysOfWeek);
    }

    if (this.allDay) {
      result.allDay = this.allDay.value;
      result._allDay = Extension.serializePrimitiveExtension(this.allDay);
    }

    if (this.availableStartTime) {
      result.availableStartTime = this.availableStartTime.value;
      result._availableStartTime = Extension.serializePrimitiveExtension(this.availableStartTime);
    }

    if (this.availableEndTime) {
      result.availableEndTime = this.availableEndTime.value;
      result._availableEndTime = Extension.serializePrimitiveExtension(this.availableEndTime);
    }

    return result;
  }

  public clone(): HealthcareServiceAvailableTime {
    return HealthcareServiceAvailableTime.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "HealthcareServiceAvailableTime";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
