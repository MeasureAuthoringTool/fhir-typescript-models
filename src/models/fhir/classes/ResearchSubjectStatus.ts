/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ResearchSubjectStatus", "PrimitiveCode")
export class ResearchSubjectStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ResearchSubjectStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ResearchSubjectStatus = new ResearchSubjectStatus()
  ): ResearchSubjectStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isResearchSubjectStatus(input?: unknown): input is ResearchSubjectStatus {
    const castInput = input as ResearchSubjectStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ResearchSubjectStatus";
  }

  public clone(): ResearchSubjectStatus {
    const result = new ResearchSubjectStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ResearchSubjectStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
