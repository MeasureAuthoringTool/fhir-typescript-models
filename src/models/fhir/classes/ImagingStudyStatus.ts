/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ImagingStudyStatus", "PrimitiveCode")
export class ImagingStudyStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImagingStudyStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ImagingStudyStatus = new ImagingStudyStatus()
  ): ImagingStudyStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isImagingStudyStatus(input?: unknown): input is ImagingStudyStatus {
    const castInput = input as ImagingStudyStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImagingStudyStatus";
  }

  public clone(): ImagingStudyStatus {
    const result = new ImagingStudyStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ImagingStudyStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
