/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("DayOfWeek", "PrimitiveCode")
export class DayOfWeek extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DayOfWeek";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DayOfWeek = new DayOfWeek()
  ): DayOfWeek {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDayOfWeek(input?: unknown): input is DayOfWeek {
    const castInput = input as DayOfWeek;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DayOfWeek";
  }

  public clone(): DayOfWeek {
    const result = new DayOfWeek();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "DayOfWeek";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
