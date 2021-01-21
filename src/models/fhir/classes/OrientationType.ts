/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("OrientationType", "PrimitiveCode")
export class OrientationType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "OrientationType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: OrientationType = new OrientationType()
  ): OrientationType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isOrientationType(input?: unknown): input is OrientationType {
    const castInput = input as OrientationType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "OrientationType";
  }

  public clone(): OrientationType {
    const result = new OrientationType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "OrientationType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
