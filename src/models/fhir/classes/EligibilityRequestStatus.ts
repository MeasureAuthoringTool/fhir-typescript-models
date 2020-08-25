/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class EligibilityRequestStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EligibilityRequestStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EligibilityRequestStatus = new EligibilityRequestStatus()
  ): EligibilityRequestStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEligibilityRequestStatus(input?: unknown): input is EligibilityRequestStatus {
    const castInput = input as EligibilityRequestStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EligibilityRequestStatus";
  }
  
  public getTypeName(): string {
    return "EligibilityRequestStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
