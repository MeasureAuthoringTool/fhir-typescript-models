/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("ObservationDataType", "PrimitiveCode")
export class ObservationDataType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ObservationDataType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ObservationDataType = new ObservationDataType()
  ): ObservationDataType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isObservationDataType(input?: unknown): input is ObservationDataType {
    const castInput = input as ObservationDataType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ObservationDataType";
  }

  public clone(): ObservationDataType {
    const result = new ObservationDataType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "ObservationDataType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
