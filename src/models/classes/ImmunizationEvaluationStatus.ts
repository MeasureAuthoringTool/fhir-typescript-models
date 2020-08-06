/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ImmunizationEvaluationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImmunizationEvaluationStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ImmunizationEvaluationStatus = new ImmunizationEvaluationStatus()
  ): ImmunizationEvaluationStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isImmunizationEvaluationStatus(input?: unknown): input is ImmunizationEvaluationStatus {
    const castInput = input as ImmunizationEvaluationStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImmunizationEvaluationStatus";
  }
  
  public getTypeName(): string {
    return "ImmunizationEvaluationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
