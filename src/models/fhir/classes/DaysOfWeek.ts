/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class DaysOfWeek extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DaysOfWeek";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DaysOfWeek = new DaysOfWeek()
  ): DaysOfWeek {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDaysOfWeek(input?: unknown): input is DaysOfWeek {
    const castInput = input as DaysOfWeek;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DaysOfWeek";
  }
  
  public getTypeName(): string {
    return "DaysOfWeek";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
