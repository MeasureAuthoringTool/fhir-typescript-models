/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ExplanationOfBenefitStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefitStatus";

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
  
  public getTypeName(): string {
    return "ExplanationOfBenefitStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
