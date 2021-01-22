/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("PublicationStatus", "PrimitiveCode")
export class PublicationStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "PublicationStatus";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: PublicationStatus = new PublicationStatus()
  ): PublicationStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isPublicationStatus(input?: unknown): input is PublicationStatus {
    const castInput = input as PublicationStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PublicationStatus";
  }

  public clone(): PublicationStatus {
    const result = new PublicationStatus();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PublicationStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
