/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveUri,
} from "../internal";

export class PrimitiveOid extends PrimitiveUri {
  static readonly baseType: string = "FHIR.uri";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "oid";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveUri.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveUri.parsePrimitive>[1],
    providedInstance: PrimitiveOid = new PrimitiveOid()
  ): PrimitiveOid {
      return PrimitiveUri.parsePrimitive(value, extension, providedInstance);
  }

  public static isPrimitiveOid(input?: unknown): input is PrimitiveOid {
    const castInput = input as PrimitiveOid;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "PrimitiveOid";
  }

  public clone(): PrimitiveOid {
    const result = new PrimitiveOid();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "PrimitiveOid";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
