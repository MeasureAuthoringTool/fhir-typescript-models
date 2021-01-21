/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ExposureState", "PrimitiveCode")
export class ExposureState extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExposureState";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ExposureState = new ExposureState()
  ): ExposureState {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isExposureState(input?: unknown): input is ExposureState {
    const castInput = input as ExposureState;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExposureState";
  }

  public clone(): ExposureState {
    const result = new ExposureState();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ExposureState";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
