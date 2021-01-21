/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ClinicalImpressionStatus", "PrimitiveCode")
export class ClinicalImpressionStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClinicalImpressionStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ClinicalImpressionStatus = new ClinicalImpressionStatus()
  ): ClinicalImpressionStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isClinicalImpressionStatus(input?: unknown): input is ClinicalImpressionStatus {
    const castInput = input as ClinicalImpressionStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClinicalImpressionStatus";
  }

  public clone(): ClinicalImpressionStatus {
    const result = new ClinicalImpressionStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ClinicalImpressionStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
