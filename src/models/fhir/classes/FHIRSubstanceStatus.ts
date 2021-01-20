/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("FHIRSubstanceStatus", "PrimitiveCode")
export class FHIRSubstanceStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "FHIRSubstanceStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: FHIRSubstanceStatus = new FHIRSubstanceStatus()
  ): FHIRSubstanceStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isFHIRSubstanceStatus(input?: unknown): input is FHIRSubstanceStatus {
    const castInput = input as FHIRSubstanceStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "FHIRSubstanceStatus";
  }

  public clone(): FHIRSubstanceStatus {
    const result = new FHIRSubstanceStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "FHIRSubstanceStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
