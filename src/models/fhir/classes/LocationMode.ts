/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("LocationMode", "PrimitiveCode")
export class LocationMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "LocationMode";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: LocationMode = new LocationMode()
  ): LocationMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isLocationMode(input?: unknown): input is LocationMode {
    const castInput = input as LocationMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "LocationMode";
  }

  public clone(): LocationMode {
    const result = new LocationMode();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "LocationMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
