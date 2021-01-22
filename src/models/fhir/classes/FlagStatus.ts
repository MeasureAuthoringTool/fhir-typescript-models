/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("FlagStatus", "PrimitiveCode")
export class FlagStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "FlagStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: FlagStatus = new FlagStatus()
  ): FlagStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isFlagStatus(input?: unknown): input is FlagStatus {
    const castInput = input as FlagStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "FlagStatus";
  }

  public clone(): FlagStatus {
    const result = new FlagStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "FlagStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
