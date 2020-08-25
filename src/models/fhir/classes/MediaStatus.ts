/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class MediaStatus extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MediaStatus";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: MediaStatus = new MediaStatus()
  ): MediaStatus {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isMediaStatus(input?: unknown): input is MediaStatus {
    const castInput = input as MediaStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MediaStatus";
  }
  
  public getTypeName(): string {
    return "MediaStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
