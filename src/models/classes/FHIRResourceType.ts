/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class FHIRResourceType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "FHIRResourceType";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: FHIRResourceType = new FHIRResourceType()
  ): FHIRResourceType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isFHIRResourceType(input?: unknown): input is FHIRResourceType {
    const castInput = input as FHIRResourceType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "FHIRResourceType";
  }
  
  public getTypeName(): string {
    return "FHIRResourceType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
