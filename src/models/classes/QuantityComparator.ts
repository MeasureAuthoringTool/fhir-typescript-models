/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class QuantityComparator extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "QuantityComparator";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: QuantityComparator = new QuantityComparator()
  ): QuantityComparator {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isQuantityComparator(input?: unknown): input is QuantityComparator {
    const castInput = input as QuantityComparator;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "QuantityComparator";
  }
  
  public getTypeName(): string {
    return "QuantityComparator";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
