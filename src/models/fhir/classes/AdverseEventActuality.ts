/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("AdverseEventActuality", "PrimitiveCode")
export class AdverseEventActuality extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AdverseEventActuality";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: AdverseEventActuality = new AdverseEventActuality()
  ): AdverseEventActuality {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isAdverseEventActuality(input?: unknown): input is AdverseEventActuality {
    const castInput = input as AdverseEventActuality;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AdverseEventActuality";
  }

  public clone(): AdverseEventActuality {
    const result = new AdverseEventActuality();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "AdverseEventActuality";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
