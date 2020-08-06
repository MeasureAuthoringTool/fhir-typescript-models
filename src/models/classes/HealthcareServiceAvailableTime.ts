/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  DaysOfWeek,
  Extension,
  IHealthcareServiceAvailableTime,
  PrimitiveBoolean,
  PrimitiveTime,
} from "../internal";

export class HealthcareServiceAvailableTime extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "HealthcareService.AvailableTime";

  public daysOfWeek?: Array<DaysOfWeek>;

  public allDay?: PrimitiveBoolean;

  public availableStartTime?: PrimitiveTime;

  public availableEndTime?: PrimitiveTime;

  public static parse(
    json: IHealthcareServiceAvailableTime,
    providedInstance: HealthcareServiceAvailableTime = new HealthcareServiceAvailableTime()
  ): HealthcareServiceAvailableTime {
    const newInstance: HealthcareServiceAvailableTime = BackboneElement.parse(json, providedInstance);
  
    if (json.daysOfWeek) {
      newInstance.daysOfWeek = json.daysOfWeek.map((x, i) => {
        const ext = json._daysOfWeek && json._daysOfWeek[i];
        return DaysOfWeek.parsePrimitive(x, ext);
      });
    }
    if (json.allDay) {
      newInstance.allDay = PrimitiveBoolean.parsePrimitive(json.allDay, json._allDay);
    }
    if (json.availableStartTime) {
      newInstance.availableStartTime = PrimitiveTime.parsePrimitive(json.availableStartTime, json._availableStartTime);
    }
    if (json.availableEndTime) {
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
  
  public getTypeName(): string {
    return "HealthcareServiceAvailableTime";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
