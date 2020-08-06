/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class DayOfWeek extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DayOfWeek";

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
  
  public getTypeName(): string {
    return "DayOfWeek";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
