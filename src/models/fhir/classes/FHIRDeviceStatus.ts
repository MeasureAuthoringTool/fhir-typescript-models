/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class FHIRDeviceStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "FHIRDeviceStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: FHIRDeviceStatus = new FHIRDeviceStatus()
  ): FHIRDeviceStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isFHIRDeviceStatus(input?: unknown): input is FHIRDeviceStatus {
    const castInput = input as FHIRDeviceStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "FHIRDeviceStatus";
  }
  
  public getTypeName(): string {
    return "FHIRDeviceStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
