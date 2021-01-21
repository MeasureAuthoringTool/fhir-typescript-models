/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("EligibilityResponsePurpose", "PrimitiveCode")
export class EligibilityResponsePurpose extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EligibilityResponsePurpose";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EligibilityResponsePurpose = new EligibilityResponsePurpose()
  ): EligibilityResponsePurpose {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEligibilityResponsePurpose(input?: unknown): input is EligibilityResponsePurpose {
    const castInput = input as EligibilityResponsePurpose;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EligibilityResponsePurpose";
  }

  public clone(): EligibilityResponsePurpose {
    const result = new EligibilityResponsePurpose();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "EligibilityResponsePurpose";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
