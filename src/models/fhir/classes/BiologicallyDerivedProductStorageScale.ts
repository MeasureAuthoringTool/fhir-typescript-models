/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class BiologicallyDerivedProductStorageScale extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BiologicallyDerivedProductStorageScale";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: BiologicallyDerivedProductStorageScale = new BiologicallyDerivedProductStorageScale()
  ): BiologicallyDerivedProductStorageScale {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isBiologicallyDerivedProductStorageScale(input?: unknown): input is BiologicallyDerivedProductStorageScale {
    const castInput = input as BiologicallyDerivedProductStorageScale;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BiologicallyDerivedProductStorageScale";
  }
  
  public getTypeName(): string {
    return "BiologicallyDerivedProductStorageScale";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
