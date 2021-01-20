/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("MeasureReportType", "PrimitiveCode")
export class MeasureReportType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MeasureReportType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: MeasureReportType = new MeasureReportType()
  ): MeasureReportType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isMeasureReportType(input?: unknown): input is MeasureReportType {
    const castInput = input as MeasureReportType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureReportType";
  }

  public clone(): MeasureReportType {
    const result = new MeasureReportType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "MeasureReportType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
