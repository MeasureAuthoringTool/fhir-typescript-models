/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ExplanationOfBenefitStatus", "PrimitiveCode")
export class ExplanationOfBenefitStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefitStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ExplanationOfBenefitStatus = new ExplanationOfBenefitStatus()
  ): ExplanationOfBenefitStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isExplanationOfBenefitStatus(input?: unknown): input is ExplanationOfBenefitStatus {
    const castInput = input as ExplanationOfBenefitStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitStatus";
  }

  public clone(): ExplanationOfBenefitStatus {
    const result = new ExplanationOfBenefitStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
