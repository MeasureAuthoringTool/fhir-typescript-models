/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ObservationStatus", "PrimitiveCode")
export class ObservationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ObservationStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ObservationStatus = new ObservationStatus()
  ): ObservationStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isObservationStatus(input?: unknown): input is ObservationStatus {
    const castInput = input as ObservationStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ObservationStatus";
  }

  public clone(): ObservationStatus {
    const result = new ObservationStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ObservationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
