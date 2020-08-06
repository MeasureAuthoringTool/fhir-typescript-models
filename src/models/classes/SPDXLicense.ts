/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class SPDXLicense extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SPDXLicense";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: SPDXLicense = new SPDXLicense()
  ): SPDXLicense {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isSPDXLicense(input?: unknown): input is SPDXLicense {
    const castInput = input as SPDXLicense;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SPDXLicense";
  }
  
  public getTypeName(): string {
    return "SPDXLicense";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
