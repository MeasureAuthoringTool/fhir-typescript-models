/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ResearchStudyStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResearchStudyStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ResearchStudyStatus = new ResearchStudyStatus()
  ): ResearchStudyStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isResearchStudyStatus(input?: unknown): input is ResearchStudyStatus {
    const castInput = input as ResearchStudyStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ResearchStudyStatus";
  }
  
  public getTypeName(): string {
    return "ResearchStudyStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
