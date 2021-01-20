/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("SlotStatus", "PrimitiveCode")
export class SlotStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SlotStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SlotStatus = new SlotStatus()
  ): SlotStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSlotStatus(input?: unknown): input is SlotStatus {
    const castInput = input as SlotStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SlotStatus";
  }

  public clone(): SlotStatus {
    const result = new SlotStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "SlotStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
