/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("RiskAssessmentStatus", "PrimitiveCode")
export class RiskAssessmentStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "RiskAssessmentStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: RiskAssessmentStatus = new RiskAssessmentStatus()
  ): RiskAssessmentStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isRiskAssessmentStatus(input?: unknown): input is RiskAssessmentStatus {
    const castInput = input as RiskAssessmentStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "RiskAssessmentStatus";
  }

  public clone(): RiskAssessmentStatus {
    const result = new RiskAssessmentStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "RiskAssessmentStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
