/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("EventTiming", "PrimitiveCode")
export class EventTiming extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EventTiming";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EventTiming = new EventTiming()
  ): EventTiming {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEventTiming(input?: unknown): input is EventTiming {
    const castInput = input as EventTiming;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EventTiming";
  }

  public clone(): EventTiming {
    const result = new EventTiming();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "EventTiming";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
