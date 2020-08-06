/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class DiagnosticReportStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DiagnosticReportStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: DiagnosticReportStatus = new DiagnosticReportStatus()
  ): DiagnosticReportStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isDiagnosticReportStatus(input?: unknown): input is DiagnosticReportStatus {
    const castInput = input as DiagnosticReportStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DiagnosticReportStatus";
  }
  
  public getTypeName(): string {
    return "DiagnosticReportStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
