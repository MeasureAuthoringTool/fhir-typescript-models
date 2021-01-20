/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("QualityType", "PrimitiveCode")
export class QualityType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "QualityType";

  static readonly primaryCodePath: string | null = null;

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

  public clone(): QualityType {
    const result = new QualityType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "QualityType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
