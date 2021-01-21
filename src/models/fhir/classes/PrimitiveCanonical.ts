/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveUri,
  FhirType
} from "../internal";

@FhirType("PrimitiveCanonical", "PrimitiveUri")
export class PrimitiveCanonical extends PrimitiveUri {
  static readonly baseType: string = "FHIR.uri";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "canonical";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveUri.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveUri.parsePrimitive>[1],
    providedInstance: PrimitiveCanonical = new PrimitiveCanonical()
  ): PrimitiveCanonical {
      return PrimitiveUri.parsePrimitive(value, extension, providedInstance);
  }

  public static isPrimitiveCanonical(input?: unknown): input is PrimitiveCanonical {
    const castInput = input as PrimitiveCanonical;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveCanonical";
  }

  public clone(): PrimitiveCanonical {
    const result = new PrimitiveCanonical();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveCanonical";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
