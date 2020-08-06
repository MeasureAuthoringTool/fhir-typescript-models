/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class StructureMapModelMode extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMapModelMode";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: StructureMapModelMode = new StructureMapModelMode()
  ): StructureMapModelMode {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isStructureMapModelMode(input?: unknown): input is StructureMapModelMode {
    const castInput = input as StructureMapModelMode;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapModelMode";
  }
  
  public getTypeName(): string {
    return "StructureMapModelMode";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
