/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class BundleType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BundleType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: BundleType = new BundleType()
  ): BundleType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isBundleType(input?: unknown): input is BundleType {
    const castInput = input as BundleType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BundleType";
  }
  
  public getTypeName(): string {
    return "BundleType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
