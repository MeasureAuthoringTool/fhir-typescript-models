/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ObservationRangeCategory extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ObservationRangeCategory";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ObservationRangeCategory = new ObservationRangeCategory()
  ): ObservationRangeCategory {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isObservationRangeCategory(input?: unknown): input is ObservationRangeCategory {
    const castInput = input as ObservationRangeCategory;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ObservationRangeCategory";
  }
  
  public getTypeName(): string {
    return "ObservationRangeCategory";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
