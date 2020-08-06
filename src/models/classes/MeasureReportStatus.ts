/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class MeasureReportStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MeasureReportStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: MeasureReportStatus = new MeasureReportStatus()
  ): MeasureReportStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isMeasureReportStatus(input?: unknown): input is MeasureReportStatus {
    const castInput = input as MeasureReportStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureReportStatus";
  }
  
  public getTypeName(): string {
    return "MeasureReportStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
