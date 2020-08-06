/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class EligibilityResponseStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EligibilityResponseStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EligibilityResponseStatus = new EligibilityResponseStatus()
  ): EligibilityResponseStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEligibilityResponseStatus(input?: unknown): input is EligibilityResponseStatus {
    const castInput = input as EligibilityResponseStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EligibilityResponseStatus";
  }
  
  public getTypeName(): string {
    return "EligibilityResponseStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
