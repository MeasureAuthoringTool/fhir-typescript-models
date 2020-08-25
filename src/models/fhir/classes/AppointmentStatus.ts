/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class AppointmentStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AppointmentStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: AppointmentStatus = new AppointmentStatus()
  ): AppointmentStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isAppointmentStatus(input?: unknown): input is AppointmentStatus {
    const castInput = input as AppointmentStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AppointmentStatus";
  }
  
  public getTypeName(): string {
    return "AppointmentStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
