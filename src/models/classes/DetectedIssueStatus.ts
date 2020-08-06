/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class DetectedIssueStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DetectedIssueStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DetectedIssueStatus = new DetectedIssueStatus()
  ): DetectedIssueStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDetectedIssueStatus(input?: unknown): input is DetectedIssueStatus {
    const castInput = input as DetectedIssueStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DetectedIssueStatus";
  }
  
  public getTypeName(): string {
    return "DetectedIssueStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
