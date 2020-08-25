/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class StructureMapInputMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMapInputMode";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: StructureMapInputMode = new StructureMapInputMode()
  ): StructureMapInputMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isStructureMapInputMode(input?: unknown): input is StructureMapInputMode {
    const castInput = input as StructureMapInputMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapInputMode";
  }
  
  public getTypeName(): string {
    return "StructureMapInputMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
