/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ListMode", "PrimitiveCode")
export class ListMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ListMode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ListMode = new ListMode()
  ): ListMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isListMode(input?: unknown): input is ListMode {
    const castInput = input as ListMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ListMode";
  }

  public clone(): ListMode {
    const result = new ListMode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ListMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
