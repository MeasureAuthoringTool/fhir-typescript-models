/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class QualityType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "QualityType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: QualityType = new QualityType()
  ): QualityType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isQualityType(input?: unknown): input is QualityType {
    const castInput = input as QualityType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "QualityType";
  }
  
  public getTypeName(): string {
    return "QualityType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
