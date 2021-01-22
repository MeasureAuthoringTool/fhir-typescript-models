/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("CompositionStatus", "PrimitiveCode")
export class CompositionStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CompositionStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CompositionStatus = new CompositionStatus()
  ): CompositionStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCompositionStatus(input?: unknown): input is CompositionStatus {
    const castInput = input as CompositionStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CompositionStatus";
  }

  public clone(): CompositionStatus {
    const result = new CompositionStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CompositionStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
