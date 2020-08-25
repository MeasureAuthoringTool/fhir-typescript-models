/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class EnrollmentRequestStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EnrollmentRequestStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EnrollmentRequestStatus = new EnrollmentRequestStatus()
  ): EnrollmentRequestStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEnrollmentRequestStatus(input?: unknown): input is EnrollmentRequestStatus {
    const castInput = input as EnrollmentRequestStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EnrollmentRequestStatus";
  }
  
  public getTypeName(): string {
    return "EnrollmentRequestStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
