/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  DaysOfWeek,
  Extension,
  FhirField,
  FhirList,
  ILocationHoursOfOperation,
  PrimitiveBoolean,
  PrimitiveTime,
  FhirType
} from "../internal";

@FhirType("LocationHoursOfOperation", "BackboneElement")
export class LocationHoursOfOperation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Location.HoursOfOperation";

  static readonly primaryCodePath: string | null = null;

  @FhirList("DaysOfWeek")
  public daysOfWeek?: Array<DaysOfWeek>;

  @FhirField("PrimitiveBoolean")
  public allDay?: PrimitiveBoolean;

  @FhirField("PrimitiveTime")
  public openingTime?: PrimitiveTime;

  @FhirField("PrimitiveTime")
  public closingTime?: PrimitiveTime;

  public static parse(
    json: ILocationHoursOfOperation,
    providedInstance: LocationHoursOfOperation = new LocationHoursOfOperation()
  ): LocationHoursOfOperation {
    const newInstance: LocationHoursOfOperation = BackboneElement.parse(json, providedInstance);
  
    if (json.daysOfWeek !== undefined) {
      newInstance.daysOfWeek = json.daysOfWeek.map((x, i) => DaysOfWeek.parsePrimitive(x, json._daysOfWeek?.[i]));
    }
    if (json.allDay !== undefined) {
      newInstance.allDay = PrimitiveBoolean.parsePrimitive(json.allDay, json._allDay);
    }
    if (json.openingTime !== undefined) {
      newInstance.openingTime = PrimitiveTime.parsePrimitive(json.openingTime, json._openingTime);
    }
    if (json.closingTime !== undefined) {
      newInstance.closingTime = PrimitiveTime.parsePrimitive(json.closingTime, json._closingTime);
    }
    return newInstance;
  }

  public static isLocationHoursOfOperation(input?: unknown): input is LocationHoursOfOperation {
    const castInput = input as LocationHoursOfOperation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "LocationHoursOfOperation";
  }

  public toJSON(): ILocationHoursOfOperation {
    const result: ILocationHoursOfOperation = super.toJSON();

    if (this.daysOfWeek) {
      result.daysOfWeek = this.daysOfWeek.filter(x => !!x).map(x => x.value) as typeof result.daysOfWeek;
      result._daysOfWeek = Extension.serializePrimitiveExtensionArray(this.daysOfWeek);
    }

    if (this.allDay) {
      result.allDay = this.allDay.value;
      result._allDay = Extension.serializePrimitiveExtension(this.allDay);
    }

    if (this.openingTime) {
      result.openingTime = this.openingTime.value;
      result._openingTime = Extension.serializePrimitiveExtension(this.openingTime);
    }

    if (this.closingTime) {
      result.closingTime = this.closingTime.value;
      result._closingTime = Extension.serializePrimitiveExtension(this.closingTime);
    }

    return result;
  }

  public clone(): LocationHoursOfOperation {
    return LocationHoursOfOperation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "LocationHoursOfOperation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
