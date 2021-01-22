/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveUri,
  FhirType
} from "../internal";

@FhirType("PrimitiveUrl", "PrimitiveUri")
export class PrimitiveUrl extends PrimitiveUri {
  static readonly baseType: string = "FHIR.uri";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "url";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveUri.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveUri.parsePrimitive>[1],
    providedInstance: PrimitiveUrl = new PrimitiveUrl()
  ): PrimitiveUrl {
      return PrimitiveUri.parsePrimitive(value, extension, providedInstance);
  }

  public static isPrimitiveUrl(input?: unknown): input is PrimitiveUrl {
    const castInput = input as PrimitiveUrl;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveUrl";
  }

  public clone(): PrimitiveUrl {
    const result = new PrimitiveUrl();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveUrl";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
