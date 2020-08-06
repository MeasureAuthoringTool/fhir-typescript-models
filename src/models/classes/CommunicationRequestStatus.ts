/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class CommunicationRequestStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CommunicationRequestStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CommunicationRequestStatus = new CommunicationRequestStatus()
  ): CommunicationRequestStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCommunicationRequestStatus(input?: unknown): input is CommunicationRequestStatus {
    const castInput = input as CommunicationRequestStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CommunicationRequestStatus";
  }
  
  public getTypeName(): string {
    return "CommunicationRequestStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
