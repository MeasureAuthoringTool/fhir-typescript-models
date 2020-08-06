/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class DetectedIssueSeverity extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DetectedIssueSeverity";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DetectedIssueSeverity = new DetectedIssueSeverity()
  ): DetectedIssueSeverity {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDetectedIssueSeverity(input?: unknown): input is DetectedIssueSeverity {
    const castInput = input as DetectedIssueSeverity;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DetectedIssueSeverity";
  }
  
  public getTypeName(): string {
    return "DetectedIssueSeverity";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
