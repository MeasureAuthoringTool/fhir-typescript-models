/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class EventTiming extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EventTiming";

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
  
  public getTypeName(): string {
    return "EventTiming";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
