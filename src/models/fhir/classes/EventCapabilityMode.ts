/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("EventCapabilityMode", "PrimitiveCode")
export class EventCapabilityMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EventCapabilityMode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EventCapabilityMode = new EventCapabilityMode()
  ): EventCapabilityMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEventCapabilityMode(input?: unknown): input is EventCapabilityMode {
    const castInput = input as EventCapabilityMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EventCapabilityMode";
  }

  public clone(): EventCapabilityMode {
    const result = new EventCapabilityMode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "EventCapabilityMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
