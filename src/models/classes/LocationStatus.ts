/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class LocationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "LocationStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: LocationStatus = new LocationStatus()
  ): LocationStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isLocationStatus(input?: unknown): input is LocationStatus {
    const castInput = input as LocationStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "LocationStatus";
  }
  
  public getTypeName(): string {
    return "LocationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
