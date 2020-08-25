/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveUri,
} from "../internal";

export class PrimitiveUuid extends PrimitiveUri {
  static readonly baseType: string = "FHIR.uri";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "uuid";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveUri.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveUri.parsePrimitive>[1],
    providedInstance: PrimitiveUuid = new PrimitiveUuid()
  ): PrimitiveUuid {
      return PrimitiveUri.parsePrimitive(value, extension, providedInstance);
  }

  public static isPrimitiveUuid(input?: unknown): input is PrimitiveUuid {
    const castInput = input as PrimitiveUuid;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveUuid";
  }
  
  public getTypeName(): string {
    return "PrimitiveUuid";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
