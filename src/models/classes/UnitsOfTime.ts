/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class UnitsOfTime extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "UnitsOfTime";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: UnitsOfTime = new UnitsOfTime()
  ): UnitsOfTime {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isUnitsOfTime(input?: unknown): input is UnitsOfTime {
    const castInput = input as UnitsOfTime;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "UnitsOfTime";
  }
  
  public getTypeName(): string {
    return "UnitsOfTime";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
