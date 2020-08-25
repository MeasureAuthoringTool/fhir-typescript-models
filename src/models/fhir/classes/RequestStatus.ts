/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class RequestStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RequestStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: RequestStatus = new RequestStatus()
  ): RequestStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isRequestStatus(input?: unknown): input is RequestStatus {
    const castInput = input as RequestStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RequestStatus";
  }
  
  public getTypeName(): string {
    return "RequestStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
