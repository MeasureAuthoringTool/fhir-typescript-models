/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class AggregationMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AggregationMode";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: AggregationMode = new AggregationMode()
  ): AggregationMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isAggregationMode(input?: unknown): input is AggregationMode {
    const castInput = input as AggregationMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AggregationMode";
  }
  
  public getTypeName(): string {
    return "AggregationMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
