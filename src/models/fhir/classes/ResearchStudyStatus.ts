/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ResearchStudyStatus", "PrimitiveCode")
export class ResearchStudyStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResearchStudyStatus";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): ResearchStudyStatus {
    const result = new ResearchStudyStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ResearchStudyStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
