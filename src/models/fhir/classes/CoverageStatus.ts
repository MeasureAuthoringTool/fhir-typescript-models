/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class CoverageStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CoverageStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: CoverageStatus = new CoverageStatus()
  ): CoverageStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isCoverageStatus(input?: unknown): input is CoverageStatus {
    const castInput = input as CoverageStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CoverageStatus";
  }

  public clone(): CoverageStatus {
    const result = new CoverageStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "CoverageStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
