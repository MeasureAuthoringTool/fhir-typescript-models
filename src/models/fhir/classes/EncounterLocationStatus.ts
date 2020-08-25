/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class EncounterLocationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EncounterLocationStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EncounterLocationStatus = new EncounterLocationStatus()
  ): EncounterLocationStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEncounterLocationStatus(input?: unknown): input is EncounterLocationStatus {
    const castInput = input as EncounterLocationStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EncounterLocationStatus";
  }
  
  public getTypeName(): string {
    return "EncounterLocationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
