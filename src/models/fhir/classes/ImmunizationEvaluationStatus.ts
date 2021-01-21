/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ImmunizationEvaluationStatus", "PrimitiveCode")
export class ImmunizationEvaluationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImmunizationEvaluationStatus";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): ImmunizationEvaluationStatus {
    const result = new ImmunizationEvaluationStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ImmunizationEvaluationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
