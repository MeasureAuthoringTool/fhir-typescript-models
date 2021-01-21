/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ListStatus", "PrimitiveCode")
export class ListStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ListStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ListStatus = new ListStatus()
  ): ListStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isListStatus(input?: unknown): input is ListStatus {
    const castInput = input as ListStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ListStatus";
  }

  public clone(): ListStatus {
    const result = new ListStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ListStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
