/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("EligibilityRequestPurpose", "PrimitiveCode")
export class EligibilityRequestPurpose extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "EligibilityRequestPurpose";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: EligibilityRequestPurpose = new EligibilityRequestPurpose()
  ): EligibilityRequestPurpose {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isEligibilityRequestPurpose(input?: unknown): input is EligibilityRequestPurpose {
    const castInput = input as EligibilityRequestPurpose;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "EligibilityRequestPurpose";
  }

  public clone(): EligibilityRequestPurpose {
    const result = new EligibilityRequestPurpose();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "EligibilityRequestPurpose";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
