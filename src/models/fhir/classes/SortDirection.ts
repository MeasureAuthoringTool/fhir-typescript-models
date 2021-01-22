/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("SortDirection", "PrimitiveCode")
export class SortDirection extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SortDirection";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SortDirection = new SortDirection()
  ): SortDirection {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSortDirection(input?: unknown): input is SortDirection {
    const castInput = input as SortDirection;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SortDirection";
  }

  public clone(): SortDirection {
    const result = new SortDirection();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "SortDirection";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
