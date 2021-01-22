/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ReferenceHandlingPolicy", "PrimitiveCode")
export class ReferenceHandlingPolicy extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ReferenceHandlingPolicy";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ReferenceHandlingPolicy = new ReferenceHandlingPolicy()
  ): ReferenceHandlingPolicy {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isReferenceHandlingPolicy(input?: unknown): input is ReferenceHandlingPolicy {
    const castInput = input as ReferenceHandlingPolicy;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ReferenceHandlingPolicy";
  }

  public clone(): ReferenceHandlingPolicy {
    const result = new ReferenceHandlingPolicy();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ReferenceHandlingPolicy";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
